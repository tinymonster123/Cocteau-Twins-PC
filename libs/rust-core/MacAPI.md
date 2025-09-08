## 1. 核心应用监控 APIs

### NSWorkspace (AppKit)
**官方文档：** https://developer.apple.com/documentation/appkit/nsworkspace

**关键方法：**
- **runningApplications** - https://developer.apple.com/documentation/appkit/nsworkspace/runningapplications
- **frontmostApplication** - https://developer.apple.com/documentation/appkit/nsworkspace/frontmostapplication

**通知事件：**
- **didLaunchApplicationNotification** - https://developer.apple.com/documentation/appkit/nsworkspace/didlaunchapplicationnotification
- **didTerminateApplicationNotification** - https://developer.apple.com/documentation/appkit/nsworkspace/didterminateapplicationnotification
- **didActivateApplicationNotification** - https://developer.apple.com/documentation/appkit/nsworkspace/didactivateapplicationnotification
- **didHideApplicationNotification** -
https://developer.apple.com/documentation/appkit/nsworkspace/didhideapplicationnotification
- **didUnhideApplicationNotification** -
https://developer.apple.com/documentation/appkit/nsworkspace/didunhideapplicationnotification

### NSRunningApplication - 应用详细信息
**官方文档：** https://developer.apple.com/documentation/appkit/nsrunningapplication

**重要属性：**
- **bundleIdentifier** - Bundle ID识别应用
- **icon** - 应用程序的图标
- **processIdentifier** - 进程PID
- **launchDate** - 应用启动时间
- **isActive** - 是否为活跃应用

## 2. 系统事件监控 APIs

### CGEvent (Quartz Event Services) - 用户活动检测
**官方文档：** https://developer.apple.com/documentation/coregraphics/quartz_event_services

**关键函数：**
- **CGEventTapCreate** - https://developer.apple.com/documentation/coregraphics/cgevent/tapcreate(tap:place:options:eventsofinterest:callback:userinfo:)?language=objc
- **CGEventSourceStateID** - https://developer.apple.com/documentation/coregraphics/cgeventsourcestateid

### IOKit Framework - 系统状态监控
**官方文档：** https://developer.apple.com/documentation/iokit

**用途：**
- 检测系统睡眠/唤醒
- 监控硬件状态变化

## 3. 权限管理 APIs

### AXIsProcessTrusted (Accessibility) - 辅助功能权限
**官方文档：** https://developer.apple.com/documentation/applicationservices/1460720-axisprocesstrusted

**用途：** 检查是否有辅助功能权限（监控其他应用必需）

### Authorization Services - 系统权限
**官方文档：** https://developer.apple.com/documentation/security/authorization_services

## 4. 时间和定时器 APIs

### NSTimer - 定期数据收集
**官方文档：** https://developer.apple.com/documentation/foundation/nstimer

### CFAbsoluteTime - 高精度时间
**官方文档：** https://developer.apple.com/documentation/corefoundation/cfabsolutetime

## 5. 网络通信 APIs

### NSURLSession - HTTP请求
**官方文档：** https://developer.apple.com/documentation/foundation/nsurlsession

**用途：** 向后端发送收集的数据

## 6. 应用生命周期 APIs

### NSApplication - 应用状态管理
**官方文档：** https://developer.apple.com/documentation/appkit/nsapplication

**重要方法：**
- **applicationDidFinishLaunching** - 应用启动完成
- **applicationWillTerminate** - 应用即将退出

### 必做

1. `NSWorkspace` - 应用启动/关闭监控
2. `NSRunningApplication` - 获取应用详细信息
3. `NSTimer` - 定期检查和数据发送
4. `CGEvent` - 用户活动检测
5. `AXIsProcessTrusted` - 权限检查
6. `IOKit` - 系统状态监控

### 可选：
1. `NSURLSession` - 网络通信优化
