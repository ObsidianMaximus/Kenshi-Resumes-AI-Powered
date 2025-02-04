import React from 'react'
import { useState } from 'react'
import {
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    HtmlButton,
    Separator,
    Toolbar,
    Editor,
    EditorProvider,
} from 'react-simple-wysiwyg';
import { Brain, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from 'sonner';
import { useContext } from 'react';
import { chatSession } from './../../../../service/AIModel';

const PROMPT = 'position title: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags';
function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [value, setvalue] = useState(defaultValue);
    const [loading, setLoading] = useState(false);

    const GenerateSummaryFromAI = async () => {
        setLoading(true);
        if (!resumeInfo?.experience[index]?.title) {
            console.log(index);
            toast("Please add a position title to generate the summary");
            setLoading(false);
            return;//if the user has not selected a position title, show a toast message and return
        }
        const prompt = PROMPT.replace("{positionTitle}", resumeInfo?.experience[index]?.title);
        console.log(PROMPT);
        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
        const res = result.response.text();
        setvalue(res.replace('[', '').replace(']').replace('{', '').replace('}'));
        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between items-center my-2'>
                <label className='text-xs'>Summery</label>
                <Button variant="outline" size="sm"
                    className="flex gap-2 border-primary text-primary"
                    onClick={GenerateSummaryFromAI}>
                    {
                        loading ?
                            <LoaderCircle className='animate-spin' /> :
                            <>
                                <Brain className='h-4 w-4' />Generate from AI
                            </>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor
                    value={value}
                    onChange={(e) => {
                        setvalue(e.target.value);
                        onRichTextEditorChange(e);//function to be called when the value of the editor changes
                    }}
                >
                    <Toolbar>
                        <BtnUndo />
                        <BtnRedo />
                        <Separator />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                        <BtnClearFormatting />
                        <HtmlButton />
                        <Separator />
                        <BtnStyles />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor