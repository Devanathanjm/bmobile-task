"use client"

import { useEffect, useState, useRef } from "react"
import {
  Warehouse,
  ClipboardCheck,
  Package,
  MapPin,
  Receipt,
  Heart,
} from "lucide-react"

const workflowSteps = [
  {
    id: 0,
    label: "Warehouse",
    icon: Warehouse,
    color: "bg-sky-100",
    iconColor: "text-sky-600",
    position: "top",
  },
  {
    id: 1,
    label: "Inventory",
    icon: ClipboardCheck,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
    position: "top",
  },
  {
    id: 2,
    label: "Orders",
    icon: Package,
    color: "bg-emerald-400",
    iconColor: "text-white",
    position: "right",
  },
  {
    id: 3,
    label: "Route",
    icon: MapPin,
    color: "bg-orange-200",
    iconColor: "text-orange-600",
    position: "bottom",
  },
  {
    id: 4,
    label: "Billing",
    icon: Receipt,
    color: "bg-emerald-400",
    iconColor: "text-white",
    position: "bottom",
  },
  {
    id: 5,
    label: "Customer",
    icon: Heart,
    color: "bg-white",
    iconColor: "text-red-500",
    position: "left",
  },
]

interface WorkflowNodeProps {
  step: (typeof workflowSteps)[number]
  isActive: boolean
}

function WorkflowNode({ step, isActive }: WorkflowNodeProps) {
  const Icon = step.icon
  const isBottom = step.position === "bottom"

  return (
    <div className="flex flex-col items-center gap-1 z-20 px-5">
      {!isBottom && (
        <span className="text-[16px] md:text-[24px] text-black whitespace-nowrap font-medium">
          {step.label}
        </span>
      )}
      <div
        className={`
          relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full 
          ${step.color} 
          flex items-center justify-center
          transition-all duration-300 ease-out
          ${isActive ? "scale-110" : "scale-100 shadow-lg"}
        `}
        style={{
          boxShadow: isActive
            ? "0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3)"
            : undefined,
        }}
      >
        <div
          className={`
            absolute inset-0 rounded-full border-2 border-emerald-400
            transition-all duration-300
            ${isActive ? "opacity-100 scale-125" : "opacity-0 scale-100"}
          `}
        />
        <div
          className={`
            absolute inset-0 rounded-full border border-emerald-300
            transition-all duration-500
            ${isActive ? "opacity-60 scale-150" : "opacity-0 scale-100"}
          `}
        />
        <Icon
          className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ${step.iconColor} transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
        />
      </div>
      {isBottom && (
        <span className="text-[16px] md:text-[24px] text-black whitespace-nowrap font-medium">
          {step.label}
        </span>
      )}
    </div>
  )
}

export default function WorkflowLoop() {
  const [activeStep, setActiveStep] = useState(-1)
  const pathRef = useRef<SVGPathElement>(null)
  const indicatorRef = useRef<SVGRectElement>(null)

  const pathD = "M 200,50 L 600,50 A 150,150 0 0 1 600,350 L 200,350 A 150,150 0 0 1 200,50"

  useEffect(() => {
    const animationDuration = 10000
    let startTime: number | null = null
    let animationId: number

    const path = pathRef.current
    if (!path) return

    const totalLength = path.getTotalLength()
    const nodePositions = [0.10, 0.22, 0.40, 0.60, 0.73, 0.90]

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = (elapsed % animationDuration) / animationDuration

      const point = path.getPointAtLength(progress * totalLength)
      const pointAhead = path.getPointAtLength(((progress + 0.01) % 1) * totalLength)
      const angle = Math.atan2(pointAhead.y - point.y, pointAhead.x - point.x) * (180 / Math.PI)
      
      const width = 50
      const height = 14
      
      if (indicatorRef.current) {
        indicatorRef.current.setAttribute("x", String(point.x - width / 2))
        indicatorRef.current.setAttribute("y", String(point.y - height / 2))
        indicatorRef.current.setAttribute("transform", `rotate(${angle}, ${point.x}, ${point.y})`)
      }

      let newActiveStep = -1
      const tolerance = 0.05

      nodePositions.forEach((nodePos, index) => {
        const diff = Math.abs(progress - nodePos)
        const wrappedDiff = Math.min(diff, 1 - diff)
        if (wrappedDiff < tolerance) {
          newActiveStep = index
        }
      })

      setActiveStep(newActiveStep)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="py-18 bg-slate-100 flex items-center justify-center p-2 sm:p-4 md:p-8">
      <div className="relative w-full max-w-5xl py-10">
        {/* SVG Container with proper aspect ratio */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Hidden path for animation */}
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="transparent"
          />

          {/* Main visible rect path */}
          <rect
            x="50"
            y="50"
            width="700"
            height="300"
            rx="150"
            ry="150"
            fill="none"
            stroke="#1e293b"
            strokeWidth="3"
          />

          {/* Moving indicator */}
          <rect
            ref={indicatorRef}
            x="175"
            y="43"
            width="50"
            height="14"
            rx="7"
            ry="7"
            fill="#8AD987"
          />

          {/* Node positions using foreignObject for responsive HTML content */}
          
          {/* Warehouse - top left */}
          <foreignObject x="140" y="-30" width="120" height="130">
            <div className="w-full h-full flex items-center justify-center">
              <WorkflowNode step={workflowSteps[0]} isActive={activeStep === 0} />
            </div>
          </foreignObject>

          {/* Inventory - top right */}
          <foreignObject x="540" y="-30" width="120" height="130">
            <div className="w-full h-full flex items-center justify-center">
              <WorkflowNode step={workflowSteps[1]} isActive={activeStep === 1} />
            </div>
          </foreignObject>

          {/* Orders - right */}
          <foreignObject x="700" y="130" width="120" height="140">
            <div className="w-full h-full flex items-center justify-center">
              <WorkflowNode step={workflowSteps[2]} isActive={activeStep === 2} />
            </div>
          </foreignObject>

          {/* Route - bottom right */}
          <foreignObject x="500" y="300" width="120" height="130">
            <div className="w-full h-full flex items-center justify-center">
              <WorkflowNode step={workflowSteps[3]} isActive={activeStep === 3} />
            </div>
          </foreignObject>

          {/* Billing - bottom left */}
          <foreignObject x="180" y="300" width="120" height="130">
            <div className="w-full h-full flex items-center justify-center">
              <WorkflowNode step={workflowSteps[4]} isActive={activeStep === 4} />
            </div>
          </foreignObject>

          {/* Happy Customer - left */}
          <foreignObject x="-40" y="130" width="140" height="140">
            <div className="w-full h-full flex items-center justify-center">
              <WorkflowNode step={workflowSteps[5]} isActive={activeStep === 5} />
            </div>
          </foreignObject>

          {/* Center Text */}
          <foreignObject x="150" y="120" width="500" height="160">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center px-2">
                <h3 className="text-[25px] md:text-[40px] text-black leading-tight">
                  How Work Flows Through
                  <br />
                  bMobile
                </h3>
                <p className="text-[20px] md:text-[30px] text-black mt-1 sm:mt-2">
                  Every step updates the next
                </p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}
