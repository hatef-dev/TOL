'use client'

import React from 'react'

export type NoiseType = 'light' | 'dark' | 'color' | 'grain'
export type NoiseIntensity = 'subtle' | 'medium' | 'strong'

interface DotNoiseBackgroundProps {
  /** نوع نویز */
  type?: NoiseType
  /** شدت نویز */
  intensity?: NoiseIntensity
  /** کلاس‌های اضافی برای container */
  className?: string
  /** کلاس‌های اضافی برای لایه نویز */
  noiseClassName?: string
  /** محتوای فرزند */
  children?: React.ReactNode
  /** اگر true، نویز تمام صفحه را می‌پوشاند */
  fullScreen?: boolean
  /** فرکانس پایه نویز (0.001 تا 0.05) */
  baseFrequency?: number
  /** آیا نویز متحرک باشد */
  animated?: boolean
}

const intensityMap: Record<NoiseIntensity, number> = {
  subtle: 0.05,
  medium: 0.15,
  strong: 0.25,
}

const getNoiseSVG = (
  type: NoiseType,
  baseFrequency: number = 0.008,
  intensity: number = 0.15
): string => {
  const svgConfig = {
    light: {
      fill: 'black',
      opacity: intensity * 0.7,
    },
    dark: {
      fill: 'white',
      opacity: intensity,
    },
    color: {
      fill: '%23ffffff',
      opacity: intensity,
      extraFilter: '%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E',
    },
    grain: {
      fill: 'white',
      opacity: intensity * 0.5,
      baseFrequency: baseFrequency * 2,
    },
  }

  const config = svgConfig[type]
  const extraFilter = 'extraFilter' in config ? config.extraFilter : ''

  return encodeURIComponent(`
    <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='${'baseFrequency' in config ? config.baseFrequency : baseFrequency}' 
          numOctaves='3' 
          stitchTiles='stitch'
          ${type === 'grain' ? "seed='2'" : ""}
        />
        ${extraFilter}
      </filter>
      <rect 
        width='100%' 
        height='100%' 
        filter='url(#noiseFilter)' 
        fill='${config.fill}' 
        opacity='${config.opacity}'
      />
    </svg>
  `).replace(/'/g, '%27')
}

const DotNoiseBackground: React.FC<DotNoiseBackgroundProps> = ({
  type = 'dark',
  intensity = 'medium',
  className = '',
  noiseClassName = '',
  children,
  fullScreen = false,
  baseFrequency = 0.008,
  animated = false,
}) => {
  const noiseIntensity = intensityMap[intensity]
  const noiseSVG = getNoiseSVG(type, baseFrequency, noiseIntensity)

  return (
    <div className={`relative ${fullScreen ? 'min-h-screen' : ''} ${className}`}>
      {/* لایه نویز */}
      <div 
        className={`absolute inset-0 pointer-events-none ${noiseClassName} ${
          animated ? 'animate-pulse-slow' : ''
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,${noiseSVG}")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />
      
      {/* محتوای اصلی */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export const NoiseDemoCard: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-sm">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        افکت نویز پیشرفته
      </h2>
      <p className="text-gray-300 mb-6">
        این یک کارت نمونه با افکت نویز نقطه‌ای در پس‌زمینه است. افکت نویز عمق و بافت جالبی به طراحی می‌دهد.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
          دکمه اول
        </button>
        <button className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
          دکمه دوم
        </button>
      </div>
    </div>
  )
}

export default DotNoiseBackground