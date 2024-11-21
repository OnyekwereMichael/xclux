import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const ShoppingCartModal = () => {
  return (
    <div>
    <Sheet defaultOpen={true} >
      <SheetContent className='sm:max-w-lg w-[90vw]'>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
     

      <div>
        <h1>Hello</h1>
      </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}
   
export default ShoppingCartModal
