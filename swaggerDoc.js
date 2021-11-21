

export const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Documentação completa NightApp',
            description:'api completa para imprementação com front-end',
            version:"1.0.0"
        },
		servers: [
			{
				url: "http://54.94.255.10:8000",
                description:'Rota para requisições'
			},
		],
    },apis: ['./documentation.js'],
}