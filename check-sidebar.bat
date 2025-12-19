@echo off
echo.
echo ========================================
echo NASA GeoViewer - Sidebar Status Check
echo ========================================
echo.

echo Checking installed components...
echo.

set "allPresent=true"

if exist "components\sidebar.tsx" (
    echo [OK] Basic Sidebar
) else (
    echo [MISSING] Basic Sidebar
    set "allPresent=false"
)

if exist "components\advanced-sidebar.tsx" (
    echo [OK] Advanced Sidebar
) else (
    echo [MISSING] Advanced Sidebar
    set "allPresent=false"
)

if exist "components\app-layout.tsx" (
    echo [OK] App Layout
) else (
    echo [MISSING] App Layout
    set "allPresent=false"
)

if exist "components\ui\scroll-area.tsx" (
    echo [OK] Scroll Area UI
) else (
    echo [MISSING] Scroll Area UI
    set "allPresent=false"
)

if exist "components\ui\separator.tsx" (
    echo [OK] Separator UI
) else (
    echo [MISSING] Separator UI
    set "allPresent=false"
)

if exist "app\page-with-sidebar.tsx" (
    echo [OK] Example Page
) else (
    echo [MISSING] Example Page
    set "allPresent=false"
)

if exist "SIDEBAR_GUIDE.md" (
    echo [OK] Sidebar Guide
) else (
    echo [MISSING] Sidebar Guide
    set "allPresent=false"
)

if exist "SIDEBAR_IMPLEMENTATION.md" (
    echo [OK] Implementation Doc
) else (
    echo [MISSING] Implementation Doc
    set "allPresent=false"
)

echo.
echo ========================================
echo.

if "%allPresent%"=="true" (
    echo Status: All sidebar components installed!
    echo.
    echo Next Steps:
    echo   1. Run: npm install
    echo   2. Run: npm run dev
    echo   3. Read: SIDEBAR_GUIDE.md for customization
) else (
    echo Status: Some components are missing!
    echo Please check the errors above.
)

echo.
echo ========================================
echo.
echo Documentation:
echo   - SIDEBAR_GUIDE.md - Customization guide
echo   - SIDEBAR_IMPLEMENTATION.md - Technical overview
echo   - SIDEBAR_VISUAL_GUIDE.md - Visual reference
echo.
echo ========================================
echo.

pause
