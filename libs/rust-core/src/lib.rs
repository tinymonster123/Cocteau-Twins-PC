#[macro_use]
extern crate napi_derive;

#[napi]
fn get_system_info() -> String {
  "Hello from Rust!".to_string()
}