'use client'
import { Button } from "../ui/button";
import FaBoxOpenCustom from "../icons/FaBoxOpenCustom";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { useState } from "react";
import productApi from "@/api/productApi";
import Spinner from "../common/Spinner";
import { delay } from "@/lib/utils";
import { ProductInputs } from "@/global/Types";

interface Props {
  product: ProductInputs;
  oldStock: number,
  updateTable: (number: Number, id: number) => void;
}

export default function EditStockModal({product, updateTable, oldStock}: Props) {

  const [newQuantity, setNewQuantity] = useState(oldStock.toString());
  const [isOpen, setIsOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const [flowNumber, setFlowNumber] = useState(0);

  const updateQuantity = async (id: number | undefined, newQuantity: string) => {
    if (newQuantity === '') return;
    try {

      setIsLoading(true);
      await productApi.editQuantity(id, newQuantity);
      updateTable(Number(newQuantity), id!);
      
    } catch (error: any) {
      console.error(error.message);
    }
    await delay(1000);
    setIsOpen(false);
    setIsLoading(false);
    setFlowNumber(0);
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <FaBoxOpenCustom title="Editar estoque" />
      </AlertDialogTrigger>

      <AlertDialogContent className="w-[800px] flex flex-col justify-evenly">
        {
          flowNumber === 0 &&
          <>
            <AlertDialogTitle>Editar Estoque</AlertDialogTitle>
            <div className="flex flex-col gap-2">
              <label htmlFor="estoque">Nova quantidade:</label>
              <Input type="number" className="w-full" value={newQuantity} onChange={(e) => setNewQuantity((e.target as HTMLInputElement).value)}/>
            </div>
            <AlertDialogFooter>
              <Button className="bg-red-400 text-textoContraste hover:bg-red-600" onClick={(e) => {setNewQuantity(oldStock.toString()); setIsOpen(false);}}>Cancelar</Button>
              <Button onClick={() => setFlowNumber(1)}>Salvar</Button>
            </AlertDialogFooter>
          </>
        }
        {
          flowNumber === 1 && 
          <>
            <AlertDialogTitle className="font-normal">Você deseja alterar o estoque do produto: <span className="font-semibold">"{product.descricao}"</span>, para: {newQuantity}?</AlertDialogTitle>
            <AlertDialogFooter>
              <Button className="bg-red-400 text-textoContraste hover:bg-red-600" onClick={(e) => {setFlowNumber(0)}}>Voltar</Button>
              <Button onClick={() => !IsLoading && updateQuantity(product.id, newQuantity)}>{IsLoading ? <Spinner /> : "Salvar"}</Button>
            </AlertDialogFooter>
          </>
        }
      </AlertDialogContent>
    </AlertDialog>
  );
}