

//////////// SALDO TOTAL ////////////////////
/**
 * @swagger
 * /promoter/fullBalance:
 *   get:
 *     summary: 'Rota para verificar extrato completo da conta'
 *     description: ''
 *     tags: [financeiro]
 *     parameters:
 *       - in: query
 *         name : promoterId
 *         description: ID do promotor que deseja ver o saldo
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/saldo'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// ENVIAR FOTO  ///////////////////////
/**
 * @swagger
 * /app/photo:
 *   post:
 *     summary: 'enviar foto para servidor'
 *     tags: [Informações detalhadas]
 *     parameters:
 *       - in: query
 *         name : partyId
 *         description: ID da festa escolhida escolhida
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/evento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */


//////////// INGRESSOS DO USUARIO ////////////////////
/**
 * @swagger
 * /user/tickets:
 *   get:
 *     summary: 'Rota para buscar todos os ingressos do usuario'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do usuario que deseja ver os ingressos
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */


//////////// GERAR QRCODE ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// EVENTOS QUE O USUARIO TEM PRODUTO ////////////////////
/**
 * @swagger
 * /user/product/event/all:
 *   get:
 *     summary: 'Rota para buscar eventos que o usuario tem produtos'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/produto'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/produto'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */


//////////// CADASTRAR INGRESSO ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// CADASTRAR PRODUTO  ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// VER CARTÔES DE CREDITO DO USUARIO ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */