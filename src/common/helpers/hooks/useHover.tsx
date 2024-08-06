import React, { useCallback, useState } from "react";

export function useHover() {
    const [currentHoverItem, setCurrentHoverItem] = useState<number | null>(null);
    const enableHover = useCallback((index: number) => setCurrentHoverItem(index), []);
    const disableHover = useCallback(() => setCurrentHoverItem(null), []);

    return {
        enableHover, disableHover, currentHoverItem
    }
}
