"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  X,
  Zap,
  Rocket,
  Settings as SettingsIcon,
  Globe,
  Clock,
  Orbit
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuickActionsPanel } from "@/components/QuickActionsPanel"
import { AsteroidControlPanel } from "@/components/asteroid-control-panel"
import { PlanetSelector } from "@/components/planet-selector"
import { SimulationTimeControls } from "@/components/simulation-time-controls"
import { RealisticModeToggle } from "@/components/realistic-mode-toggle"
import { OrbitPathViewer } from "@/components/orbit-path-viewer"
import { AppLogo } from "@/components/app-logo"
import type { CelestialBody } from "@/lib/orbital-mechanics"
import type { CustomAsteroid } from "@/lib/asteroid-system"
import type { ScaleMode, TimeScale } from "@/lib/realistic-mode"

interface UnifiedSidebarProps {
  // Quick Actions Props
  simulationActive: boolean
  isPaused: boolean
  onStartSimulation: () => void
  onPauseToggle: () => void
  onReset: () => void
  onLoadPreset: (preset: string) => void
  onLoadNASA: () => void
  onOpenMapImpact: () => void
  onToggleFeatureHub: () => void
  
  // Asteroid Control Props
  customAsteroids: CustomAsteroid[]
  onAddAsteroid: (asteroid: CustomAsteroid) => void
  onRemoveAsteroid: (asteroidId: string) => void
  customObjects: CelestialBody[]
  onAddCustomObject: (object: CelestialBody) => void
  onRemoveCustomObject: (id: string) => void
  onAddRealAsteroid: (presetKey: string) => Promise<void>
  onAnalyzeImpact: (object: CelestialBody, openInModal?: boolean) => void
  onViewObject: (object: CelestialBody) => void
  
  // Planet Selector Props
  selectedPlanet: string | null
  onSelectPlanet: (planet: string | null) => void
  
  // Time Controls Props
  timeSpeed: number
  onTimeSpeedChange: (speed: number) => void
  simulationDate: Date
  onResetTime: () => void
  
  // Realistic Mode Props
  scaleMode: ScaleMode
  onScaleModeChange: (mode: ScaleMode) => void
  timeScale: TimeScale
  onTimeScaleChange: (scale: TimeScale) => void
  
  // Orbit Viewer Props
  onFocusObject?: (object: CelestialBody) => void
}

export function UnifiedSidebar({
  // Quick Actions
  simulationActive,
  isPaused,
  onStartSimulation,
  onPauseToggle,
  onReset,
  onLoadPreset,
  onLoadNASA,
  onOpenMapImpact,
  onToggleFeatureHub,
  
  // Asteroid Control
  customAsteroids,
  onAddAsteroid,
  onRemoveAsteroid,
  customObjects,
  onAddCustomObject,
  onRemoveCustomObject,
  onAddRealAsteroid,
  onAnalyzeImpact,
  onViewObject,
  
  // Planet Selector
  selectedPlanet,
  onSelectPlanet,
  
  // Time Controls
  timeSpeed,
  onTimeSpeedChange,
  simulationDate,
  onResetTime,
  
  // Realistic Mode
  scaleMode,
  onScaleModeChange,
  timeScale,
  onTimeScaleChange,
  
  // Orbit Viewer
  onFocusObject,
}: UnifiedSidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("quick-actions")

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        size="icon"
        variant="outline"
        className="fixed top-20 left-4 z-50 md:hidden bg-black/80 backdrop-blur-md border-purple-500/50 hover:bg-purple-500/20"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-purple-300" />
        ) : (
          <Menu className="w-5 h-5 text-purple-300" />
        )}
      </Button>

      {/* Desktop Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        variant="outline"
        className={`hidden md:flex fixed top-20 z-40 transition-all duration-300 bg-black/80 backdrop-blur-md border-purple-500/50 hover:bg-purple-500/20 ${
          isOpen ? 'left-[420px]' : 'left-4'
        }`}
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5 text-purple-300" />
        ) : (
          <ChevronRight className="w-5 h-5 text-purple-300" />
        )}
      </Button>

      {/* Sidebar Container */}
      <div
        className={`
          fixed top-20 left-0 h-[calc(100vh-80px)] z-30 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isMobileMenuOpen ? 'translate-x-0' : 'max-md:-translate-x-full'}
        `}
      >
        <Card className="h-full w-screen md:w-[400px] lg:w-[420px] bg-black/60 backdrop-blur-xl border-r border-purple-500/30 rounded-none overflow-hidden flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-purple-500/30 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 flex-shrink-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AppLogo variant="satellite" className="w-5 h-5 text-purple-400" />
                Control Panel
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleFeatureHub}
                className="text-purple-300 hover:text-white hover:bg-purple-500/20"
              >
                <SettingsIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="flex-1 flex flex-col overflow-hidden"
          >
            <TabsList className="w-full grid grid-cols-3 gap-1 p-2 bg-transparent flex-shrink-0">
              <TabsTrigger 
                value="quick-actions"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              >
                <Zap className="w-3 h-3 mr-1" />
                Quick
              </TabsTrigger>
              <TabsTrigger 
                value="objects"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              >
                <AppLogo variant="orbit" className="w-3 h-3 mr-1" />
                Objects
              </TabsTrigger>
              <TabsTrigger 
                value="settings"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              >
                <SettingsIcon className="w-3 h-3 mr-1" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Quick Actions Tab */}
              <TabsContent value="quick-actions" className="p-4 space-y-4 m-0">
                <QuickActionsPanel
                  simulationActive={simulationActive}
                  isPaused={isPaused}
                  onStartSimulation={onStartSimulation}
                  onPauseToggle={onPauseToggle}
                  onReset={onReset}
                  onLoadPreset={onLoadPreset}
                  onLoadNASA={onLoadNASA}
                  onOpenMapImpact={onOpenMapImpact}
                  onToggleFeatureHub={onToggleFeatureHub}
                  onToggleSettings={() => setActiveTab("settings")}
                />
              </TabsContent>

              {/* Objects Tab */}
              <TabsContent value="objects" className="p-4 space-y-4 m-0">
                <AsteroidControlPanel
                  customAsteroids={customAsteroids}
                  onAddAsteroid={onAddAsteroid}
                  onRemoveAsteroid={onRemoveAsteroid}
                  customObjects={customObjects}
                  onAddCustomObject={onAddCustomObject}
                  onRemoveCustomObject={onRemoveCustomObject}
                  onAddRealAsteroid={onAddRealAsteroid}
                  onAnalyzeImpact={onAnalyzeImpact}
                  onViewObject={onViewObject}
                />
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="p-4 space-y-4 m-0">
                {/* Realistic Mode */}
                <div>
                  <h3 className="text-sm font-semibold text-purple-200 mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Display Mode
                  </h3>
                  <RealisticModeToggle
                    currentMode={scaleMode}
                    onModeChange={onScaleModeChange}
                    currentTimeScale={timeScale}
                    onTimeScaleChange={onTimeScaleChange}
                    showTimeControls={false}
                  />
                </div>

                {/* Planet Focus */}
                <div>
                  <h3 className="text-sm font-semibold text-purple-200 mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Focus Camera
                  </h3>
                  <PlanetSelector
                    selectedPlanet={selectedPlanet}
                    onSelectPlanet={onSelectPlanet}
                  />
                </div>

                {/* Time Controls */}
                <div>
                  <h3 className="text-sm font-semibold text-purple-200 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time Control
                  </h3>
                  <SimulationTimeControls
                    isPaused={isPaused}
                    onPauseToggle={onPauseToggle}
                    timeSpeed={timeSpeed}
                    onTimeSpeedChange={onTimeSpeedChange}
                    simulationDate={simulationDate}
                    onReset={onResetTime}
                  />
                </div>

                {/* Orbit Comparison */}
                <div>
                  <h3 className="text-sm font-semibold text-purple-200 mb-3 flex items-center gap-2">
                    <Orbit className="w-4 h-4" />
                    Orbit Comparison
                  </h3>
                  <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    <OrbitPathViewer
                      customObjects={customObjects}
                      onFocusObject={onFocusObject}
                    />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </>
  )
}
