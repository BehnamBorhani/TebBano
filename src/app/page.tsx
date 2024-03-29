import { Button } from "./_component/button";
import { Loading } from "./_component/loading";

export default function Home() {
  return (
    <>
      <div className="flex h-40 items-center justify-center">
        <Button variant="primary" color="blue" isLoading loadingText="لودینگ">
          Click Here
        </Button>
        <Loading />
      </div>
    </>
  );
}
