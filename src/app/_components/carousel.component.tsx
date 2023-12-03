import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Box, IconButton, MobileStepper, Stack } from "@mui/material"
import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from "embla-carousel-react"
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react"

export default function Carousel({
    children,
    ...carouselOptions
}: PropsWithChildren & EmblaOptionsType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
    const [selectIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (canScrollPrev) {
            emblaApi?.scrollPrev();
        }
    }, [canScrollPrev]);

    const scrollNext = useCallback(() => {
        if (canScrollNext) {
            emblaApi?.scrollNext();
        }
    }, [canScrollNext]);

    const onUpdate = (emblaApi?: EmblaCarouselType) => {
        setSelectedIndex(emblaApi?.selectedScrollSnap || 0);
        setCanScrollPrev(emblaApi?.canScrollPrev() || false);
        setCanScrollNext(emblaApi?.canScrollNext() || false);
    }

    useEffect(() => {
        onUpdate(emblaApi);
        emblaApi?.on("reInit", onUpdate)
        emblaApi?.on("select", onUpdate);
    }, [emblaApi, children]);

    return (
        <Box ref={emblaRef}
            overflow="hidden"
            position="relative">
            <Stack direction="row">
                {children}
            </Stack>

            {
                carouselOptions.active &&
                <MobileStepper
                    position="static"
                    steps={children.length}
                    activeStep={selectIndex}
                    sx={{
                        bgcolor: "transparent",
                        py: 1
                    }}                    
                    backButton={
                        <IconButton
                            disabled={!canScrollPrev}
                            onClick={scrollPrev}>
                            <ChevronLeft />
                        </IconButton>
                    }
                    nextButton={
                        <IconButton
                            hidden={!carouselOptions.active}
                            disabled={!canScrollNext}
                            onClick={scrollNext}>
                            <ChevronRight />
                        </IconButton>
                    }
                />
            }
        </Box >
    )
}