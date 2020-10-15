<h1>Segundo Dia </h1>
<h3>Passos para trabalhar com typescript e nodejs</h3>

yarn add @types/express -D
yarn add typescript -D

<h3>Cria o arquivo de coniguração do TypeScript tsconfig.json</h3>

yarn tsc --init

yarn add ts-node-dev -D

<h2>Dependencias gerais do back-end</h2>

<p>Nesse caso foi utilizado o sqlite3, mas nada nos impede de trocar para mariaDB ou MySQL</p>

<p>yarn add sqlite3</p>
<p>yarn add typeorm</p>
<p>yarn add multer</p>
<p>yarn add @types/multer -D </p>
<p>yarn add express-async-errors </p>
<p>yarn add yup </p>
<p>yarn add @types/yup -D </p>
<p>yarn add cors </p>
<p>yarn add @types/cors -D </p>

<h4>Ir até o tsconfig e alterar a versão do ecma para 2017</h4>

<h5>também deixar a seguinte config no arquivo: </h5>

<p>"skipLibCheck": true,  </p>
<p>"forceConsistentCasingInFileNames": true </p>

<h3>Ir no packge.json criar um sript personalizado</h3>

<code> "scripts": {
"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
},
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

</code>

<h2>Para inicar o projeto:</h2>

<p>yarn dev</p>

<p>para um bom ambiente de desenvolvimento foram recomendadas as ferramentas beekeeper e insomnia.</p>

<h4>comandos relacionados a migrations utilizados nas aulas </h4>

<p>yarn typeorm migration:create -n create_orphanages </p>

<p>yarn typeorm migration:run </p>

<p>yarn typeorm migration:revert </p>

<p>yarn typeorm migration:create -n create_images </p>

<p>yarn typeorm migration:run </p>

<strong>Comandos uteis: yarn typeorm migration:revert<strong>

<p>volta o ultimo comando de migration, util para dropar a tabela caso precise de alterações</p>
