# Tin Nhanh 24h – Expo + AdMob (Banner, Interstitial, App Open)

## Bước 1. Cài dependencies
Mở terminal tại thư mục chứa `App.tsx`, `app.json` và `package.json`:
```bash
npm install
```
Máy cần cài Node.js phiên bản LTS. Các cấu hình Expo, TypeScript và plugin AdMob đã có sẵn trong thư mục dự án.

## Bước 2. Build Development Build bằng EAS (làm 1 lần)
Trên Windows, mở PowerShell và chạy các lệnh sau. `EAS_NO_VCS` và `EAS_PROJECT_ROOT` ngăn EAS đóng gói nhầm toàn bộ Git repository `D:\code` thay vì chỉ dự án Tin Tức.
```powershell
Set-Location 'D:\code\files\tintuc-app-src\tintuc-app-src'
$env:EAS_NO_VCS = '1'
$env:EAS_PROJECT_ROOT = (Get-Location).Path
$env:TEMP = "$env:LOCALAPPDATA\Temp"
$env:TMP = $env:TEMP
npx.cmd eas-cli@latest login
npx.cmd eas-cli@latest build --profile development --platform android
```
Không chạy lệnh build từ thư mục dự án khác hoặc thư mục cha chứa nhiều project. `.easignore` loại các APK/build output khỏi gói tải lên.
Build xong (vài phút, trên cloud) EAS cho link/QR tải file **APK** → mở link bằng điện thoại Android, cài đặt (cho phép "cài từ nguồn không xác định").

## Bước 3. Chạy hằng ngày qua wifi
```bash
npx expo start --lan
```
Để chạy nhanh giao diện bằng **Expo Go**, mở Expo Go và quét QR. Trong Expo Go, quảng cáo được tự động tắt vì ứng dụng Expo Go không chứa module native AdMob.

Để kiểm tra quảng cáo, cài Development Build ở bước 2 trước, sau đó chạy:
```bash
npx expo start --dev-client --lan
```
Mở app "Tin Nhanh 24h" (không phải Expo Go) và quét QR. Điện thoại và máy tính cần cùng Wi-Fi. Sửa code thông thường sẽ tự cập nhật; cần build lại khi đổi `app.json` hoặc thêm thư viện native.

Để chạy trên Android emulator, khởi động emulator trước rồi dùng `npm run android`.

## Hành vi quảng cáo
| Loại | Khi nào hiện |
|---|---|
| App Open | Khi mở app (tải xong trong 5 giây) và khi quay lại app từ nền |
| Banner | Cuối màn danh sách và màn chi tiết |
| Interstitial | Cứ 2 lần bấm vào bài thì hiện 1 lần (đổi `INTERSTITIAL_EVERY` trong `src/screens/HomeScreen.tsx`) |

## Chuyển sang ID thật
1. Tạo app + 3 ad unit trên https://admob.google.com
2. Thay `androidAppId` trong `app.json`, thay 3 ID trong `src/ads/adUnits.ts`
3. Build lại (`eas build ...`)

Lưu ý: khi dùng ID thật, **không tự bấm quảng cáo của chính mình** (có thể bị khóa tài khoản). Khi quay video/nộp bài nên dùng ID thử.
