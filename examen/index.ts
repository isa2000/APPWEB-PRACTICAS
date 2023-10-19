interface IRequest {
    id: number;
    url: string;
    returnType: string;
    format: string;
    status: string;
    parameters: IParameter[

    ]
}
interface IParameter {
    id: number;
    name: string;
    type: string;
    comment: string;
    requestId: number;
}


const arregloDeRequest: IRequest[] = [
    {
        id: 1,
        url: "",
        returnType: "",
        format: "",
        status: "En proceso",
        parameters: [
            {
                id: 1,
                name: "",
                type: "string",
                comment: "",
                requestId: 1
            },
        ]
    },
    {
        id: 2,
        url: "",
        returnType: "",
        format: "",
        status: "Completo",
        parameters: [
            {
                id: 2,
                name: "",
                type: "string",
                comment: "",
                requestId: 2
            }
        ]
    },
    {
        id: 3,
        url: "",
        returnType: "",
        format: "",
        status: "En proceso",
        parameters: [
            {
                id: 3,
                name: "",
                type: "string",
                comment: "",
                requestId: 3
            },

        ]
    }
];





function eliminarElementoPorId(Arreglo: IRequest[], idAEliminar: number) {
    const result = Arreglo.find((Elemento) => Elemento.id === idAEliminar);
    Arreglo[result].status = "ELIMINADO"


    const idEliminar = 1;
    eliminarElementoPorId(arregloDeRequest, idEliminar);
    console.log(arregloDeRequest);

}


