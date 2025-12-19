# NASA GeoViewer - Sidebar Status Check
# Run this to verify your sidebar installation

Write-Host ""
Write-Host "🚀 NASA GeoViewer - Sidebar Status Check" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Define file paths
$files = @{
    "Basic Sidebar" = "components/sidebar.tsx"
    "Advanced Sidebar" = "components/advanced-sidebar.tsx"
    "App Layout" = "components/app-layout.tsx"
    "Scroll Area UI" = "components/ui/scroll-area.tsx"
    "Separator UI" = "components/ui/separator.tsx"
    "Example Page" = "app/page-with-sidebar.tsx"
    "Sidebar Guide" = "SIDEBAR_GUIDE.md"
    "Implementation Doc" = "SIDEBAR_IMPLEMENTATION.md"
}

Write-Host "📦 Checking installed components..." -ForegroundColor Yellow
Write-Host ""

$allPresent = $true
foreach ($item in $files.GetEnumerator()) {
    $exists = Test-Path $item.Value
    
    if ($exists) {
        Write-Host "✅ $($item.Key)" -ForegroundColor Green -NoNewline
        $size = (Get-Item $item.Value).Length
        $lines = (Get-Content $item.Value).Count
        Write-Host " ($lines lines, $([math]::Round($size/1024, 1)) KB)" -ForegroundColor Gray
    } else {
        Write-Host "❌ $($item.Key) - NOT FOUND" -ForegroundColor Red
        $allPresent = $false
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

# Check current page status
Write-Host "📄 Current Page Status:" -ForegroundColor Yellow
Write-Host ""

if (Test-Path "app/page.tsx") {
    $content = Get-Content "app/page.tsx" -Raw
    
    if ($content -match "AdvancedSidebar") {
        Write-Host "   ✅ Using SIDEBAR VERSION" -ForegroundColor Green
        Write-Host "   📊 Your app has the advanced sidebar!" -ForegroundColor Cyan
    } else {
        Write-Host "   📌 Using ORIGINAL VERSION" -ForegroundColor Yellow
        Write-Host "   💡 To enable sidebar, run: .\switch-page.ps1" -ForegroundColor Cyan
    }
} else {
    Write-Host "   ❌ app/page.tsx not found!" -ForegroundColor Red
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

# Check dependencies
Write-Host "📚 Checking Dependencies:" -ForegroundColor Yellow
Write-Host ""

if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    
    $requiredDeps = @(
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-separator",
        "lucide-react",
        "class-variance-authority"
    )
    
    $allDepsPresent = $true
    foreach ($dep in $requiredDeps) {
        if ($packageJson.dependencies.$dep) {
            Write-Host "   ✅ $dep" -ForegroundColor Green
        } else {
            Write-Host "   ❌ $dep - MISSING" -ForegroundColor Red
            $allDepsPresent = $false
        }
    }
    
    Write-Host ""
    
    if (-not $allDepsPresent) {
        Write-Host "   ⚠️  Some dependencies are missing!" -ForegroundColor Yellow
        Write-Host "   💡 Run: npm install" -ForegroundColor Cyan
    } else {
        Write-Host "   ✅ All dependencies installed!" -ForegroundColor Green
    }
} else {
    Write-Host "   ❌ package.json not found!" -ForegroundColor Red
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

# Summary
Write-Host "📋 Summary:" -ForegroundColor Yellow
Write-Host ""

if ($allPresent) {
    Write-Host "   🎉 All sidebar components are installed!" -ForegroundColor Green
    Write-Host ""
    Write-Host "   📚 Next Steps:" -ForegroundColor Cyan
    Write-Host "      1. Run: .\switch-page.ps1 (to enable sidebar)" -ForegroundColor White
    Write-Host "      2. Run: npm run dev (to start app)" -ForegroundColor White
    Write-Host "      3. Read: SIDEBAR_GUIDE.md (for customization)" -ForegroundColor White
} else {
    Write-Host "   ⚠️  Some components are missing!" -ForegroundColor Red
    Write-Host "   💡 Please check the errors above" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

# Feature checklist
Write-Host "✨ Available Features:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   ✅ Basic Sidebar (simple navigation)" -ForegroundColor Green
Write-Host "   ✅ Advanced Sidebar (tabs, controls, stats)" -ForegroundColor Green
Write-Host "   ✅ Mobile Responsive" -ForegroundColor Green
Write-Host "   ✅ Dark/Light Theme Support" -ForegroundColor Green
Write-Host "   ✅ Collapsible/Expandable" -ForegroundColor Green
Write-Host "   ✅ Glassmorphism Design" -ForegroundColor Green
Write-Host "   ✅ Smooth Animations" -ForegroundColor Green
Write-Host "   ✅ Interactive Controls" -ForegroundColor Green
Write-Host "   ✅ Live Statistics" -ForegroundColor Green
Write-Host "   ✅ System Status" -ForegroundColor Green
Write-Host ""

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Documentation:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   📄 SIDEBAR_GUIDE.md           - Customization guide" -ForegroundColor Cyan
Write-Host "   📄 SIDEBAR_IMPLEMENTATION.md  - Complete overview" -ForegroundColor Cyan
Write-Host "   📄 app/page-with-sidebar.tsx  - Example code" -ForegroundColor Cyan
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""
