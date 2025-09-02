// Rust 与 TypeScript 之间的桥接类型

export interface RustCoreAPI {
    // 示例：文件操作
    readFile: (path: string) => Promise<string>
    writeFile: (path: string, content: string) => Promise<void>

    // 示例：系统操作
    getSystemStats: () => Promise<SystemStats>

    // 示例：数据处理
    processData: (input: ProcessInput) => Promise<ProcessOutput>
}

export interface SystemStats {
    memoryUsage: number
    cpuUsage: number
    diskUsage: number
    uptime: number
}

export interface ProcessInput {
    data: string
    options?: {
        format?: 'json' | 'text' | 'binary'
        encoding?: string
    }
}

export interface ProcessOutput {
    result: string
    status: 'success' | 'error'
    metadata?: Record<string, unknown>
}
