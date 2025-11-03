// Permite usar valores específicos como tipos, podendo estes tipos serem combinados com unions:
type status_order = "canceled" | "in_process" | "completed"; // Estou definindo tipos específicos
type order = {
    id: number;
    status: status_order;
}
let order_example:order = {
    id: 1,
    status: "in_process"
}


