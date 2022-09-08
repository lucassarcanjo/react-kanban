import { useLayoutEffect, useRef } from "react";
import { Input, TextArea } from "./Editor.styles";

export type EditorProps =
  | ({
      textArea: true;
      autoSize?: boolean;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({
      textArea?: false;
    } & React.InputHTMLAttributes<HTMLInputElement>);

const MIN_TEXTAREA_HEIGHT = 32;

export const Editor: React.FC<EditorProps> = (props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const autoSize = props.textArea && props.autoSize;

  // This effect is used to resize the textarea when the content is bigger than the textarea
  useLayoutEffect(() => {
    const textArea = textAreaRef.current;

    if (!autoSize || textArea === null) return;

    textArea.style.height = "inherit";

    textArea.style.height = `${Math.max(
      textArea.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [props.textArea, props.value, autoSize]);

  return (
    <>
      {!props.textArea && <Input {...props} />}
      {props.textArea && <TextArea ref={textAreaRef} {...props} />}
    </>
  );
};
