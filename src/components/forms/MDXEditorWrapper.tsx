import { BoldItalicUnderlineToggles, DiffSourceToggleWrapper, InsertCodeBlock, InsertImage, MDXEditor, MDXEditorMethods, UndoRedo, codeBlockPlugin, codeMirrorPlugin, diffSourcePlugin, headingsPlugin, imagePlugin, quotePlugin, toolbarPlugin } from "@mdxeditor/editor"

export type MDXEditorWrapperProps = {
    className?: string
    onChange?: (val: string) => void
    innerref?: React.RefObject<MDXEditorMethods>
    mdown?: string
}

export const MDXEditorWrapper = ({className, onChange, innerref, mdown}: MDXEditorWrapperProps) => {
    return (
        <MDXEditor
        ref={innerref}
        suppressHtmlProcessing={false}
        className={className}
        onChange={onChange}
        markdown={mdown || ''}
        contentEditableClassName={className}
        plugins={[
            // the viewMode parameter lets you switch the editor to diff or source mode.
            // you can get the diffMarkdown from your backend and pass it here.
            imagePlugin(),
            codeBlockPlugin({defaultCodeBlockLanguage: 'js'}),
            codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', cpp: 'C++' } }),
            diffSourcePlugin({ diffMarkdown: 'An older version', viewMode: 'source' }),
            headingsPlugin(),
            quotePlugin(),
        ]}
    />
    )
}