# Switch to Sidebar Version
# This script helps you toggle between the original page and the sidebar version

Write-Host "🚀 NASA GeoViewer - Page Switcher" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

$currentPage = "app/page.tsx"
$sidebarPage = "app/page-with-sidebar.tsx"
$backupPage = "app/page-original-backup.tsx"

# Check if sidebar version exists
if (-not (Test-Path $sidebarPage)) {
    Write-Host "❌ Error: Sidebar version not found at $sidebarPage" -ForegroundColor Red
    exit 1
}

Write-Host "Select an option:" -ForegroundColor Yellow
Write-Host "1. Switch to Sidebar version (recommended)" -ForegroundColor Green
Write-Host "2. Restore original version" -ForegroundColor Magenta
Write-Host "3. View current version" -ForegroundColor Cyan
Write-Host "4. Exit" -ForegroundColor Gray
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "📦 Creating backup of current page..." -ForegroundColor Yellow
        
        if (Test-Path $currentPage) {
            Copy-Item -Path $currentPage -Destination $backupPage -Force
            Write-Host "✅ Backup created: $backupPage" -ForegroundColor Green
        }
        
        Write-Host "🔄 Switching to sidebar version..." -ForegroundColor Yellow
        Copy-Item -Path $sidebarPage -Destination $currentPage -Force
        
        Write-Host ""
        Write-Host "✨ SUCCESS! Sidebar version is now active!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📚 Next steps:" -ForegroundColor Cyan
        Write-Host "  1. Run: npm run dev" -ForegroundColor White
        Write-Host "  2. Open: http://localhost:3000" -ForegroundColor White
        Write-Host "  3. Check: SIDEBAR_GUIDE.md for customization" -ForegroundColor White
        Write-Host ""
    }
    
    "2" {
        if (Test-Path $backupPage) {
            Write-Host ""
            Write-Host "🔄 Restoring original version..." -ForegroundColor Yellow
            Copy-Item -Path $backupPage -Destination $currentPage -Force
            
            Write-Host ""
            Write-Host "✅ Original version restored!" -ForegroundColor Green
            Write-Host ""
        } else {
            Write-Host ""
            Write-Host "❌ No backup found at $backupPage" -ForegroundColor Red
            Write-Host ""
        }
    }
    
    "3" {
        Write-Host ""
        Write-Host "📄 Current version info:" -ForegroundColor Cyan
        
        if (Test-Path $currentPage) {
            $content = Get-Content $currentPage -Raw
            
            if ($content -match "AdvancedSidebar") {
                Write-Host "✅ Currently using: SIDEBAR VERSION" -ForegroundColor Green
            } else {
                Write-Host "📌 Currently using: ORIGINAL VERSION" -ForegroundColor Yellow
            }
            
            $lines = (Get-Content $currentPage).Count
            Write-Host "📊 Lines of code: $lines" -ForegroundColor Cyan
        } else {
            Write-Host "❌ No page.tsx found!" -ForegroundColor Red
        }
        Write-Host ""
    }
    
    "4" {
        Write-Host ""
        Write-Host "👋 Goodbye!" -ForegroundColor Cyan
        Write-Host ""
        exit 0
    }
    
    default {
        Write-Host ""
        Write-Host "❌ Invalid choice. Please run the script again." -ForegroundColor Red
        Write-Host ""
        exit 1
    }
}
