import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FaGear } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function SearchBar(props: {value:string, setValue: Function}) {
    const {value, setValue} = props;

    return <div className="flex gap-2">
        <div className="flex">
            <Input placeholder="Pesquisar" className="w-[200px] h-[35px] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[0px] rounded-l-md border-r-0" />
            <div title="pesquisar" className="bg-terciaria hover:bg-terciaria2 transition w-[35px] h-[35px] rounded-r-sm cursor-pointer shadow-md flex justify-center items-center">
                <FaSearch className="text-textoContraste" size={20} />
            </div>
        </div>
        <Popover>
            <PopoverTrigger>
                <div title="pesquisar" className="bg-terciaria hover:bg-terciaria2 transition w-[35px] h-[35px] rounded-sm cursor-pointer shadow-md flex justify-center items-center">
                    <FaGear className="text-textoContraste" size={20} />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px]">
                <h1 className="font-bold">Organizar por:</h1>
                <RadioGroup defaultValue="id" className="mt-2" onValueChange={(e) => setValue(e)}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="id" id="id" />
                        <Label htmlFor="id">Id</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="descricao" id="descricao" />
                        <Label htmlFor="descricao">Descrição</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="estoque" id="estoque" />
                        <Label htmlFor="estoque">Estoque</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unidadeMedida" id="unidadeMedida" />
                        <Label htmlFor="unidadeMedida">Unidade de Medida</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="preco" id="preco" />
                        <Label htmlFor="preco">Preço</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="codigoBarrasEAN13" id="codigoBarrasEAN13" />
                        <Label htmlFor="codigoBarrasEAN13">Código de Barras</Label>
                    </div>
                </RadioGroup>

            </PopoverContent>
        </Popover>
    </div>
}
