import { BoldItalicUnderlineToggles, DiffSourceToggleWrapper, InsertCodeBlock, InsertImage, MDXEditor, UndoRedo, codeBlockPlugin, codeMirrorPlugin, diffSourcePlugin, headingsPlugin, imagePlugin, quotePlugin, toolbarPlugin } from "@mdxeditor/editor"

export type MDXEditorWrapperProps = {
    className?: string
    onChange?: (val: string) => void
}

export const MDXEditorWrapper = ({className, onChange}: MDXEditorWrapperProps) => {
    return (
        <MDXEditor
        className={className}
        onChange={onChange}
        markdown={''}
        contentEditableClassName={className}
        plugins={[
            // the viewMode parameter lets you switch the editor to diff or source mode.
            // you can get the diffMarkdown from your backend and pass it here.
            imagePlugin(),
            codeBlockPlugin({defaultCodeBlockLanguage: 'js'}),
            codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),
            diffSourcePlugin({ diffMarkdown: 'An older version', viewMode: 'source' }),
            headingsPlugin(),
            quotePlugin(),
        ]}
    />
    )
}