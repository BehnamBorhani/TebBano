"use client";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

function QueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/*<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />*/}
    </QueryClientProvider>
  );
}

export default QueryProvider;
