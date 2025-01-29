import { PlusSquare } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


function AddResume() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div>
            <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
                onClick={() => setOpenDialog(true)}>
                <PlusSquare />
            </div>

            <Dialog open={openDialog}> {/* if openDialog is true dialog will open and vice-versa */}
                {/* <DialogTrigger>Open</DialogTrigger> */} {/* This is the button that will trigger open the dialog */}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            Add a title for you resume
                            <Input className="mt-2 my-2" placeholder="Enter your job title here" />
                        </DialogDescription>

                        {/*editing dialog box*/}
                        <div className='flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant="ghost" className="text-white">Cancel</Button>
                            <Button >Create</Button>
                        </div>

                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume