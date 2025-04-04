import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CsvTab from "./CsvTab";
import NfeTab from "./NfceTab";

export default function ImportOptions({ closePopover }: { closePopover: () => void }) {
    return <Tabs defaultValue="nfce" className="w-[400px]">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="nfce">NF-e</TabsTrigger>
      <TabsTrigger value="csv">CSV</TabsTrigger>
    </TabsList>
    <TabsContent value="nfce">
      <Card>
        <CardHeader>
          {/* <CardTitle>NFCe</CardTitle> */}
          <CardDescription>
            Importar  NF-e.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <NfeTab closePopover={closePopover}/>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="csv">
      <Card>
        <CardHeader>
          {/* <CardTitle>CSV</CardTitle> */}
          <CardDescription>
            Importar arquivo CSV.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <CsvTab closePopover={closePopover}/>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
}