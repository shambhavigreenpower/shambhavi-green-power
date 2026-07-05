import * as React from "react";
import * as THREE from "three";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Landmark, Shield, Zap, TrendingUp, ChevronRight } from "lucide-react";
import { useRouter } from "../../lib/router";
import { Button } from "../ui/Button";
import { ShambhaviLogo } from "../ui/ShambhaviLogo";

type TechType = "mono" | "poly" | "bifacial";

export function HeroSection() {
  const { navigate } = useRouter();
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const cellMaterialRef = React.useRef<THREE.MeshStandardMaterial | null>(null);

  // Tech state for the 3D interactive toggle
  const [panelTech, setPanelTech] = React.useState<TechType>("mono");

  // Three.js Interactive Setup
  React.useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    let width = canvas.clientWidth || 400;
    let height = canvas.clientHeight || 400;

    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xf59e0b, 2.0); // Golden Sun
    sunLight.position.set(5, 5, 4);
    scene.add(sunLight);

    const coolGlow = new THREE.PointLight(0x2d9e47, 3, 10); // Green technology back-glow
    coolGlow.position.set(-3, -2, 1);
    scene.add(coolGlow);

    // Create a 3D Solar Panel Group
    const panelGroup = new THREE.Group();

    // 1. Panel Aluminum Frame
    const frameGeometry = new THREE.BoxGeometry(2.4, 1.4, 0.08);
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x475569, // Slate gray sleek premium casing
      metalness: 0.9,
      roughness: 0.1,
    });
    const frameMesh = new THREE.Mesh(frameGeometry, frameMaterial);
    panelGroup.add(frameMesh);

    // 2. Solar PV Active Cells
    const cellGeometry = new THREE.BoxGeometry(2.28, 1.28, 0.04);
    const cellMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Default Mono PERC dark charcoal blue
      metalness: 0.95,
      roughness: 0.05,
    });
    const cellMesh = new THREE.Mesh(cellGeometry, cellMaterial);
    cellMesh.position.z = 0.03;
    panelGroup.add(cellMesh);
    cellMaterialRef.current = cellMaterial; // Store reference to mutate dynamically

    // 3. Tech Grid Overlay on Panel
    const gridHelper = new THREE.GridHelper(2.3, 8, 0x2d9e47, 0x1e293b);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.z = 0.055;
    gridHelper.scale.set(1, 0.55, 1);
    panelGroup.add(gridHelper);

    // Initial Angle of Panel
    panelGroup.rotation.x = 0.3;
    panelGroup.rotation.y = -0.4;
    scene.add(panelGroup);

    // Particles (Golden solar photon streams)
    const particleCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Photon stream coordinates targeting panel
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      // Velocity vectors drifting upward & inward
      velocities.push((Math.random() - 0.5) * 0.01);
      velocities.push(Math.random() * 0.015 + 0.005);
      velocities.push((Math.random() - 0.5) * 0.01);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Create high-quality gold photon material
    const canvasTexture = (() => {
      const matCanvas = document.createElement("canvas");
      matCanvas.width = 16;
      matCanvas.height = 16;
      const ctx = matCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "#f59e0b");
        gradient.addColorStop(0.4, "#fbbf24");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(matCanvas);
    })();

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      map: canvasTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Target rotation based on mouse hover
    let targetRotationX = 0.3;
    let targetRotationY = -0.4;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1; // -1 to 1
      
      // Update target rotation targets
      targetRotationY = -0.4 + x * 0.6;
      targetRotationX = 0.3 - y * 0.4;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth interpolation (Slerp style) towards mouse target
      panelGroup.rotation.y += (targetRotationY - panelGroup.rotation.y) * 0.05;
      panelGroup.rotation.x += (targetRotationX - panelGroup.rotation.x) * 0.05;

      // Float effect if mouse idle
      const elapsedTime = clock.getElapsedTime();
      if (Math.abs(targetRotationY - (-0.4)) < 0.05 && Math.abs(targetRotationX - 0.3) < 0.05) {
        panelGroup.rotation.y = -0.4 + Math.sin(elapsedTime * 0.4) * 0.15;
        panelGroup.rotation.x = 0.3 + Math.cos(elapsedTime * 0.2) * 0.05;
      }

      // Update particles
      const posArray = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i * 3];
        posArray[i * 3 + 1] += velocities[i * 3 + 1];
        posArray[i * 3 + 2] += velocities[i * 3 + 2];

        // Loop photon bounds
        if (posArray[i * 3 + 1] > 3) {
          posArray[i * 3] = (Math.random() - 0.5) * 6;
          posArray[i * 3 + 1] = -3;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

     animate();

    // Handle container resizes
    const handleResize = () => {
      const containerRect = canvas.parentElement?.getBoundingClientRect();
      if (!containerRect) return;
      const w = containerRect.width;
      const h = containerRect.width; // Maintain aspect ratio square for widget console

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Apply initial sizes
    handleResize();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      frameGeometry.dispose();
      frameMaterial.dispose();
      cellGeometry.dispose();
      cellMaterial.dispose();
      gridHelper.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  // Update Three.js materials when technology state changes
  React.useEffect(() => {
    if (!cellMaterialRef.current) return;
    const mat = cellMaterialRef.current;
    
    if (panelTech === "mono") {
      mat.color.setHex(0x0f172a); // Slate-black high absorption
      mat.metalness = 0.95;
      mat.roughness = 0.05;
    } else if (panelTech === "poly") {
      mat.color.setHex(0x1e3a8a); // Saturated crystal blue
      mat.metalness = 0.8;
      mat.roughness = 0.2;
    } else if (panelTech === "bifacial") {
      mat.color.setHex(0x334155); // Translucent carbon-fiber gray
      mat.metalness = 0.98;
      mat.roughness = 0.02;
    }
  }, [panelTech]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#07130a] text-white flex items-center overflow-hidden pt-28 pb-16 px-4 md:px-8"
    >
      {/* Absolute High-End Styling Grid Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(45,158,71,0.15),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(245,158,11,0.08),_transparent_55%)]" />
      
      {/* Modern thin cyber tech line girders */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* LEFT COLUMN: Editorial Copy & Live Premium Performance Metrics Showcase */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Brand Authorization Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-light font-display text-xs font-bold tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span>SHAMBHAVI GREEN POWER PRIVATE LIMITED</span>
          </motion.div>

          {/* Premium Headline */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-emerald-400 to-green-500 glow-emerald">
                High-Performance
              </span> <br />
              Solar Generation.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed"
            >
              Transition your estate, business, or farm to clean power with India's premium tier-1 solar photovoltaic arrays. Engineered for absolute structural integrity, maximum energy yields, and sustainable long-term returns.
            </motion.p>
          </div>

          {/* Redesigned Premium Specs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-2xl bg-[#091a0f]/40 backdrop-blur-md border border-brand-primary/15 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
            
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] uppercase font-display font-black tracking-widest text-brand-light flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                SYSTEM SPECIFICATIONS & GUARANTEES
              </span>
              <span className="text-[9px] text-gray-400 font-mono">TIER-1 ARCHITECTURE</span>
            </div>

            {/* Performance Showcase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#0b2413]/40 border border-brand-primary/10 hover:border-brand-primary/30 rounded-2xl p-4 flex gap-3.5 items-start transition-all duration-300">
                <div className="p-2 bg-brand-primary/20 text-brand-accent rounded-xl">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">High Cell Efficiency</h4>
                  <p className="font-sans text-xs text-gray-400 mt-1">Up to 22.8% conversion efficiency utilizing state-of-the-art Mono PERC technology.</p>
                </div>
              </div>

              <div className="bg-[#0b2413]/40 border border-brand-primary/10 hover:border-brand-primary/30 rounded-2xl p-4 flex gap-3.5 items-start transition-all duration-300">
                <div className="p-2 bg-brand-primary/20 text-brand-accent rounded-xl">
                  <Landmark className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Government Subsidized</h4>
                  <p className="font-sans text-xs text-gray-400 mt-1">We facilitate full end-to-end processing for direct bank subsidy claims.</p>
                </div>
              </div>

              <div className="bg-[#0b2413]/40 border border-brand-primary/10 hover:border-brand-primary/30 rounded-2xl p-4 flex gap-3.5 items-start transition-all duration-300">
                <div className="p-2 bg-brand-primary/20 text-brand-accent rounded-xl">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Engineered Lifespan</h4>
                  <p className="font-sans text-xs text-gray-400 mt-1">Sturdy hot-dip galvanized mounting structures built to resist 180 km/h wind loads.</p>
                </div>
              </div>

              <div className="bg-[#0b2413]/40 border border-brand-primary/10 hover:border-brand-primary/30 rounded-2xl p-4 flex gap-3.5 items-start transition-all duration-300">
                <div className="p-2 bg-brand-primary/20 text-brand-accent rounded-xl">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Rapid Investment Payback</h4>
                  <p className="font-sans text-xs text-gray-400 mt-1">Enjoy an optimized payback period, generating free sustainable energy for decades.</p>
                </div>
              </div>

            </div>

            <div className="mt-5 pt-3 border-t border-brand-primary/10 flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">STRUCTURAL INTEGRITY CERTIFIED</span>
              <div className="flex items-center gap-1.5 text-xs text-brand-light font-bold">
                <span className="text-[11px] text-brand-accent hover:underline cursor-pointer" onClick={() => navigate("/about")}>Learn about our quality standards</span>
                <ChevronRight className="h-3.5 w-3.5 text-brand-accent" />
              </div>
            </div>
          </motion.div>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
          >
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto shadow-2xl group relative overflow-hidden text-brand-dark"
              onClick={() => navigate("/contact")}
            >
              <span className="relative z-10 flex items-center justify-center font-bold">
                Apply For Your Subsidy
                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white/20 hover:border-white hover:bg-white/5"
              onClick={() => {
                const nextSec = document.getElementById("stats-bar-id");
                if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See Savings Milestones
            </Button>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Holographic 3D Interactive Solar Console (35%) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full aspect-square bg-[#081a0e]/90 border border-brand-light/20 rounded-3xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* HUD Status Header overlay */}
            <div className="flex items-center justify-between z-30">
              <div className="flex items-center gap-1.5 bg-brand-primary/35 border border-brand-light/20 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider text-brand-light">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                3D CONSOLE ACTIVE
              </div>
              <div className="text-[9px] font-mono text-gray-400">ROTATION: ACTIVE HOVER</div>
            </div>

            {/* Main Interactive Three.js Canvas Container */}
            <div className="relative flex-grow flex items-center justify-center min-h-[220px]">
              <canvas ref={canvasRef} className="absolute w-full h-full cursor-grab active:cursor-grabbing" />
              
              {/* Glass subtle details overlay */}
              <div className="absolute inset-x-0 bottom-4 text-center pointer-events-none">
                <span className="text-[10px] text-gray-400 font-mono bg-brand-dark/85 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                  Drag or hover cursor to pivot cell structure
                </span>
              </div>
            </div>

            {/* HUD Technology Custom Toggle Console */}
            <div className="z-30 pt-3 border-t border-brand-primary/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-brand-light mb-2 block font-extrabold text-center">
                Select Photovoltaic Architecture:
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {(["mono", "poly", "bifacial"] as TechType[]).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setPanelTech(tech)}
                    className={`px-2 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all flex flex-col items-center gap-1 cursor-pointer border ${
                      panelTech === tech
                        ? "bg-brand-primary border-brand-light text-white shadow-md shadow-brand-primary/20"
                        : "bg-brand-dark/50 border-brand-primary/10 text-gray-400 hover:text-white hover:border-brand-primary/30"
                    }`}
                  >
                    <span>{tech === "mono" ? "Mono PERC" : tech === "poly" ? "Poly XT" : "Bifacial"}</span>
                    <span className="text-[8px] opacity-60">
                      {tech === "mono" ? "22.8% Eff." : tech === "poly" ? "18.5% Eff." : "Double-Sided"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 mb-1.5 font-display">
          Scroll Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/10 rounded-full flex justify-center p-1 cursor-pointer hover:border-brand-accent transition-colors"
          onClick={() => {
            const nextSec = document.getElementById("stats-bar-id");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="w-1 h-1 bg-brand-accent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
