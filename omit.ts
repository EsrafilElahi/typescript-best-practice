// way 1
type IconSize = "sm" | "xs" | "md" | "lg" | "xl" | Omit<string, "sm" | "xs" | "md" | "lg" | "xl"> ;

// way 2
type tt = "sm" | "xs" | "md" | "lg" | "xl"
type IconSize2 = tt | Omit<string, tt> ;

// way 3
type customExcludeType<T extends string> = T | Omit<string, T>
type IconSize3 = customExcludeType<"sm" | "xs" | "md" | "lg" | "xl">


interface Size {
  size: IconSize
}

// inside component
<Icon size="xs" />
<Icon size="sm" />
<Icon size="anotherSize" />
