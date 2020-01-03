export function listPrinters(): Promise<string[]>;

export function defaultPrinterName(): Promise<string>;

export function setPrinter(printer: string): void;

export function getCurrentPrinter(): string;

export function printerInfo(printer?: string): Promise<any>;

export function queueStatus(printer?: string): Promise<string>;

export function printerOptions(printer?: string): Promise<PrinterOptions>;

export function print(filename: string, options?: PrintOptions, printer?: string): Promise<void>;

export function printText(text: string, options?: PrintOptions, printer?: string): Promise<void>;

interface PrinterOptions {
    Collate?: string[],
    Duplexing?: string[],
    MaxCopy?: number,
    SupportsColors?: boolean,
    PaperSheets?: string[],
    Resolutions?: string[],
}

interface PrintOptions {
    collate?: boolean,
    color?: boolean,
    copies?: number,
    duplex?: "Default",
    landscape?: boolean,
    paperSize?: string,
    fromPage?: number,
    toPage?: number,
}
