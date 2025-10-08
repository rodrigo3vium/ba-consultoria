import MDEditor from '@uiw/react-md-editor';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const RichTextEditor = ({ 
  value, 
  onChange, 
  placeholder = 'Escreva o conteúdo aqui...',
  className 
}: RichTextEditorProps) => {
  return (
    <div className={cn("markdown-editor", className)} data-color-mode="dark">
      <MDEditor
        value={value}
        onChange={(val) => onChange(val || '')}
        preview="edit"
        height={500}
        textareaProps={{
          placeholder: placeholder
        }}
      />
    </div>
  );
};
