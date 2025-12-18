# 🎨 Logo Quick Reference

## Current Setup

### Header Logo (Animated Rocket)
```
Location: app/page.tsx (line ~340)
Current: AnimatedLogo (pulsing rocket with ping effect)
```

### Sidebar Logo (Satellite)
```
Location: components/unified-sidebar.tsx (line ~167)
Current: AppLogo variant="satellite"
```

---

## 5-Second Changes

### Change to Globe 🌍
**File:** `app/page.tsx` line ~340
```tsx
<AppLogo variant="globe" className="w-6 h-6 text-blue-500" />
```

### Change to Telescope 🔭
**File:** `app/page.tsx` line ~340
```tsx
<AppLogo variant="telescope" className="w-6 h-6 text-purple-500" />
```

### Change to Orbit/Eclipse 🌑
**File:** `app/page.tsx` line ~340
```tsx
<AppLogo variant="orbit" className="w-6 h-6 text-primary" />
```

### Use Your Own Image 🖼️
**Step 1:** Save logo to `public/logo.svg`  
**Step 2:** Edit `app/page.tsx` line ~340
```tsx
<AppLogo 
  variant="image" 
  imagePath="/logo.svg"
  className="w-8 h-8"
/>
```

---

## Icon Variants

| Variant | Icon | Use Case |
|---------|------|----------|
| `rocket` | 🚀 | Default, space travel |
| `satellite` | 🛰️ | Communications, orbiting |
| `globe` | 🌍 | Earth focus, planetary |
| `orbit` | 🌑 | Orbital mechanics |
| `telescope` | 🔭 | Observation, astronomy |
| `image` | 🖼️ | Custom logo file |

---

## Where to Edit

```
app/page.tsx
  └─ Line ~340: Header logo

components/unified-sidebar.tsx
  └─ Line ~167: Sidebar header logo
  └─ Line ~198: Objects tab icon

components/app-logo.tsx
  └─ Logo component (customize here)
```

---

## Import Statement

Already added to your files:
```tsx
import { AppLogo, AnimatedLogo, NASALogo } from "@/components/app-logo"
```

---

## Examples

### Animated Rocket (Current Header)
```tsx
<AnimatedLogo className="w-6 h-6 text-primary" />
```

### Satellite (Current Sidebar)
```tsx
<AppLogo variant="satellite" className="w-5 h-5 text-purple-400" />
```

### NASA Style
```tsx
<NASALogo className="w-6 h-6 text-blue-500" />
```

### Custom Image
```tsx
<AppLogo variant="image" imagePath="/my-logo.svg" className="w-8 h-8" />
```

---

✅ **Your logo system is ready to use!**
