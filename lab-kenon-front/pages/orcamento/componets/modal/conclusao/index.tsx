import { Button } from "@chakra-ui/react";


const Conclusao = () => {
 const text = `gostaria de solicitar um pedido de lente: 
  lente protedor solar `;
 
  return (
    <Button 
    as="a"
    href={`https://wa.me/5511939449035?text=${text}`}
    >
        Enviar
    </Button>
  );
};

export default Conclusao;
