export default function HighlightText(props:{ text:string, term:string }) {
    const { text, term } = props;
    
    const markedText = text.split(new RegExp(`(${term})`, 'gi')).map((part, index) => {
      if (part.toLowerCase() === term?.toLowerCase()) {
        return <mark key={index}>{part}</mark>;
      }
      return part;
    });
  
    return <p>{markedText}</p>;
  }