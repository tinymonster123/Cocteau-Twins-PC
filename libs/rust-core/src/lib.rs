#![deny(clippy::all)]

use napi_derive::napi;

#[napi]
pub fn get_system_info() -> String {
  let os_type = sys_info::os_type().unwrap_or_else(|_| "Unknown".to_string());
  let os_release = sys_info::os_release().unwrap_or_else(|_| "Unknown".to_string());
  let cpu_num = sys_info::cpu_num().unwrap_or(0);
  let cpu_speed = sys_info::cpu_speed().unwrap_or(0);
  format!(
    "OS: {} {}
CPU Cores: {}
CPU Speed: {} MHz",
    os_type, os_release, cpu_num, cpu_speed
  )
}
