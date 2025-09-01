import React from 'react'
import { Editor } from '@tinymce/tinymce-react'   // Importing the TinyMCE React Editor component
import { Controller } from 'react-hook-form'   // Importing Controller from react-hook-form to integrate the editor with form validation

// Reusable Rich Text Editor (RTE) component
export default function RTE({ name, control, label, defaultValue = '' }) {

    return (
        <div className='w-full'>
            {/* If a label is provided, render it */}
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            {/* Use Controller to bind TinyMCE Editor with react-hook-form */}
            <Controller
                name={name || 'content'}   // Field name for the form
                control={control}   // The control object from useForm()
                render={({ field: { onChange } }) => (   // The render prop lets us define how the field should behave
                    <Editor
                        apiKey='4sinmb9shxkwfy10uazbd8sr4sm9lk5cz8200yi5gm6k7nby'
                        initialValue={defaultValue}   // Sets the initial content of the editor
                        init={{
                            initialValue: defaultValue,   // Optional: Redundant with the prop above
                            height: 500,   // Editor height in pixels
                            menubar: true,   // Show the top menubar
                            plugins: [
                                "image", "advlist", "autolink", "lists", "link", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount",
                            ],
                            toolbar:   // Toolbar options with text formatting, layout controls, and more
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"   // Sets default font style for content
                        }}
                        onEditorChange={onChange}   // Hook form will get updated when editor content changes
                    />
                )}
            />
        </div>
    )
}