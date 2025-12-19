# Logo Customization Guide

## ✅ What I Changed

I've updated your app with a flexible logo system that you can easily customize!

### Changed Files:
1. **`components/app-logo.tsx`** (NEW) - Reusable logo component
2. **`app/page.tsx`** - Header now uses AnimatedLogo
3. **`components/unified-sidebar.tsx`** - Sidebar uses Satellite icon

---

## 🎨 Logo Options

### Option 1: Use Different Icons (Current)

Your app now has 5 icon options built-in:

```tsx
<AppLogo variant="rocket" />      // 🚀 Rocket (default)
<AppLogo variant="satellite" />   // 🛰️ Satellite (sidebar)
<AppLogo variant="globe" />       // 🌍 Globe
<AppLogo variant="orbit" />       // 🌑 Orbit/Eclipse
<AppLogo variant="telescope" />   // 🔭 Telescope
```

**To change the header logo:**

Edit `app/page.tsx` line ~340:
```tsx
// Change from:
<AnimatedLogo className="w-6 h-6 text-primary" />

// To any of these:
<AppLogo variant="satellite" className="w-6 h-6 text-primary" />
<AppLogo variant="globe" className="w-6 h-6 text-primary" />
<AppLogo variant="orbit" className="w-6 h-6 text-primary" />
<AppLogo variant="telescope" className="w-6 h-6 text-primary" />
```

**To change the sidebar logo:**

Edit `components/unified-sidebar.tsx` line ~167:
```tsx
// Currently:
<AppLogo variant="satellite" className="w-5 h-5 text-purple-400" />

// Change to:
<AppLogo variant="rocket" className="w-5 h-5 text-purple-400" />
// or any other variant
```

---

### Option 2: Use an Image/SVG Logo

**Step 1:** Add your logo file to the `public` folder:
```
public/
  ├── logo.svg         (recommended)
  ├── logo.png
  └── nasa-logo.svg
```

**Step 2:** Use the image variant:

```tsx
// In app/page.tsx header:
<AppLogo 
  variant="image" 
  imagePath="/logo.svg"
  className="w-8 h-8"
  size={32}
/>

// In sidebar:
<AppLogo 
  variant="image" 
  imagePath="/logo.svg"
  className="w-6 h-6"
  size={24}
/>
```

---

### Option 3: Use NASA-Style Logo

The component includes a NASA-inspired logo:

```tsx
import { NASALogo } from "@/components/app-logo"

// In header:
<NASALogo className="w-6 h-6 text-primary" />

// In sidebar:
<NASALogo className="w-5 h-5 text-purple-400" />
```

---

### Option 4: Use Animated Logo (Current in Header)

The header currently uses an animated pulsing rocket:

```tsx
<AnimatedLogo className="w-6 h-6 text-primary" />
```

This adds a subtle pulse animation and a ping effect.

---

## 🖼️ Adding Custom Logo Files

### Recommended: SVG Logo

**1. Create or download your logo as SVG**
   - NASA official: https://www.nasa.gov/multimedia/guidelines/
   - Free space logos: https://www.svgrepo.com/
   - Create custom: https://www.figma.com/

**2. Save to public folder:**
```
public/my-logo.svg
```

**3. Update the code:**

```tsx
// app/page.tsx
<AppLogo 
  variant="image" 
  imagePath="/my-logo.svg"
  className="w-8 h-8"
/>
```

### Using PNG/JPG

```tsx
<AppLogo 
  variant="image" 
  imagePath="/logo.png"
  className="w-8 h-8 rounded-full"  // rounded for circular logos
  size={32}
/>
```

---

## 🎨 Customization Examples

### Example 1: NASA Official Logo

```tsx
// Download NASA logo and save to public/nasa-logo.svg
<AppLogo 
  variant="image" 
  imagePath="/nasa-logo.svg"
  className="w-10 h-10"
  size={40}
/>
```

### Example 2: Custom Colored Icon

```tsx
<AppLogo 
  variant="globe" 
  className="w-6 h-6 text-blue-500"  // Custom color
/>
```

### Example 3: Larger Logo

```tsx
<AppLogo 
  variant="satellite" 
  className="w-12 h-12 text-primary"  // Bigger size
/>
```

### Example 4: With Gradient

```tsx
<div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
  <AppLogo 
    variant="orbit" 
    className="w-6 h-6 text-white"
  />
</div>
```

---

## 🔧 Advanced: Create Custom Logo Component

Create `components/custom-logo.tsx`:

```tsx
export function CustomLogo({ className = "w-6 h-6" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
    >
      {/* Your custom SVG path */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4"/>
      <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeWidth="3"/>
      {/* Add more paths for your design */}
    </svg>
  )
}
```

Then use it:
```tsx
import { CustomLogo } from "@/components/custom-logo"

<CustomLogo className="w-6 h-6 text-primary" />
```

---

## 📱 Responsive Logo Sizes

Different sizes for different screens:

```tsx
<AppLogo 
  variant="satellite"
  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary"
/>
```

This makes the logo:
- 20px on mobile
- 24px on tablet
- 32px on desktop

---

## 🎯 Current Logo Setup

**Header (Main page):**
- Uses: `AnimatedLogo` (animated rocket with pulse)
- Location: `app/page.tsx` line ~340
- Size: 24px (w-6 h-6)

**Sidebar:**
- Uses: `AppLogo variant="satellite"`
- Location: `components/unified-sidebar.tsx` line ~167
- Size: 20px (w-5 h-5)

**Objects Tab:**
- Uses: `AppLogo variant="orbit"`
- Location: `components/unified-sidebar.tsx` line ~198
- Size: 12px (w-3 h-3)

---

## 🚀 Quick Change Guide

### Want a Globe instead of Rocket?

**app/page.tsx** (line ~340):
```tsx
// Change from:
<AnimatedLogo className="w-6 h-6 text-primary" />

// To:
<AppLogo variant="globe" className="w-6 h-6 text-blue-500" />
```

### Want to use your own logo file?

1. Save logo to `public/my-awesome-logo.svg`
2. Edit **app/page.tsx** (line ~340):
```tsx
<AppLogo 
  variant="image" 
  imagePath="/my-awesome-logo.svg"
  className="w-8 h-8"
  size={32}
/>
```

### Want NASA branding?

**app/page.tsx** (line ~340):
```tsx
import { NASALogo } from "@/components/app-logo"

// In header:
<NASALogo className="w-8 h-8 text-blue-500" />
```

---

## 🎨 Color Customization

Change logo colors using Tailwind classes:

```tsx
// Blue
<AppLogo variant="globe" className="w-6 h-6 text-blue-500" />

// Purple gradient effect
<AppLogo variant="satellite" className="w-6 h-6 text-purple-500" />

// Custom color
<AppLogo variant="orbit" className="w-6 h-6 text-[#FF6B6B]" />

// Animated color
<AppLogo variant="rocket" className="w-6 h-6 text-primary animate-pulse" />
```

---

## ✅ Summary

You now have:
- ✅ Flexible logo component with 5 icon options
- ✅ Support for custom image logos
- ✅ NASA-style logo option
- ✅ Animated logo variant
- ✅ Easy to customize colors and sizes
- ✅ Responsive sizing support

**Currently using:**
- Header: Animated Rocket 🚀 (pulsing)
- Sidebar: Satellite 🛰️
- Objects Tab: Orbit 🌑

Feel free to mix and match based on your preference! 🌟
