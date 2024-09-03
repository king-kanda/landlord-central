import  ToastButton  from '@/components/features/toast'

const Page = () => {

  return (
    <div
    className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-[80vh]"
    >
    <div className="flex flex-col items-center gap-1 text-center">
      <h3 className="text-2xl font-bold tracking-tight">
        You have no products
      </h3>
      <p className="text-sm text-muted-foreground">
        You can start selling as soon as you add a product.
      </p>
      <ToastButton/>
    </div>
  </div>
  );
}

export default Page;
