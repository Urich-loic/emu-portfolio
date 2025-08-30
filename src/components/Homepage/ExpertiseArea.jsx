import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ExpertiseArea() {
  return (
    <>
      <div className="xl:py-27 lg:py-27 md:py-27 sm:py-18 xs:py-18 padding_class">
        <div className="experienceWrapper">
          <Carousel>
            <CarouselContent className={"space-x-5"}>
              <CarouselItem
                className={
                  "basis-1/3 flex justify-center items-center text-white bg-zinc-700 p-7 rounded-2xl"
                }
              >
                <img src="" alt="" />
              </CarouselItem>
              <CarouselItem
                className={
                  "basis-1/3 flex justify-center items-center text-white bg-zinc-700 p-7 rounded-2xl"
                }
              >
                1
              </CarouselItem>
              <CarouselItem
                className={
                  "basis-1/3 flex justify-center items-center text-white bg-zinc-700 p-7 rounded-2xl"
                }
              >
                1
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
