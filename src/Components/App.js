import React, { useState } from 'react'
import { 
	Layout, 
	Typography, 
	Row, 
	Col, 
	List, 
	Avatar,
	Form,
	Input,
	Select,
	Button,
} from 'antd';
import Group5 from '../../dist/assets/Group5.jpg'
import twitter from '../../dist/assets/twitter-4-128.png'
import facebook from '../../dist/assets/facebook-4-128.png'
import youtube from '../../dist/assets/youtube-4-128.png'
import linkedin from '../../dist/assets/linkedin-4-128.png'
import instagram from '../../dist/assets/instagram-4-128.png'

const { Title, Text } = Typography;
const { Header, Footer, Content } = Layout;
const { Option } = Select;

const countries = () => (
	<>
		<Option value='Afganistán' id='AF'>
			Afganistán
		</Option>
		<Option value='Albania' id='AL'>
			Albania
		</Option>
		<Option value='Alemania' id='DE'>
			Alemania
		</Option>
		<Option value='Andorra' id='AD'>
			Andorra
		</Option>
		<Option value='Angola' id='AO'>
			Angola
		</Option>
		<Option value='Anguila' id='AI'>
			Anguila
		</Option>
		<Option value='Antártida' id='AQ'>
			Antártida
		</Option>
		<Option value='Antigua y Barbuda' id='AG'>
			Antigua y Barbuda
		</Option>
		<Option value='Antillas holandesas' id='AN'>
			Antillas holandesas
		</Option>
		<Option value='Arabia Saudí' id='SA'>
			Arabia Saudí
		</Option>
		<Option value='Argelia' id='DZ'>
			Argelia
		</Option>
		<Option value='Argentina' id='AR'>
			Argentina
		</Option>
		<Option value='Armenia' id='AM'>
			Armenia
		</Option>
		<Option value='Aruba' id='AW'>
			Aruba
		</Option>
		<Option value='Australia' id='AU'>
			Australia
		</Option>
		<Option value='Austria' id='AT'>
			Austria
		</Option>
		<Option value='Azerbaiyán' id='AZ'>
			Azerbaiyán
		</Option>
		<Option value='Bahamas' id='BS'>
			Bahamas
		</Option>
		<Option value='Bahrein' id='BH'>
			Bahrein
		</Option>
		<Option value='Bangladesh' id='BD'>
			Bangladesh
		</Option>
		<Option value='Barbados' id='BB'>
			Barbados
		</Option>
		<Option value='Bélgica' id='BE'>
			Bélgica
		</Option>
		<Option value='Belice' id='BZ'>
			Belice
		</Option>
		<Option value='Benín' id='BJ'>
			Benín
		</Option>
		<Option value='Bermudas' id='BM'>
			Bermudas
		</Option>
		<Option value='Bhután' id='BT'>
			Bhután
		</Option>
		<Option value='Bielorrusia' id='BY'>
			Bielorrusia
		</Option>
		<Option value='Birmania' id='MM'>
			Birmania
		</Option>
		<Option value='Bolivia' id='BO'>
			Bolivia
		</Option>
		<Option value='Bosnia y Herzegovina' id='BA'>
			Bosnia y Herzegovina
		</Option>
		<Option value='Botsuana' id='BW'>
			Botsuana
		</Option>
		<Option value='Brasil' id='BR'>
			Brasil
		</Option>
		<Option value='Brunei' id='BN'>
			Brunei
		</Option>
		<Option value='Bulgaria' id='BG'>
			Bulgaria
		</Option>
		<Option value='Burkina Faso' id='BF'>
			Burkina Faso
		</Option>
		<Option value='Burundi' id='BI'>
			Burundi
		</Option>
		<Option value='Cabo Verde' id='CV'>
			Cabo Verde
		</Option>
		<Option value='Camboya' id='KH'>
			Camboya
		</Option>
		<Option value='Camerún' id='CM'>
			Camerún
		</Option>
		<Option value='Canadá' id='CA'>
			Canadá
		</Option>
		<Option value='Chad' id='TD'>
			Chad
		</Option>
		<Option value='Chile' id='CL'>
			Chile
		</Option>
		<Option value='China' id='CN'>
			China
		</Option>
		<Option value='Chipre' id='CY'>
			Chipre
		</Option>
		<Option value='Ciudad estado del Vaticano' id='VA'>
			Ciudad estado del Vaticano
		</Option>
		<Option value='Colombia' id='CO'>
			Colombia
		</Option>
		<Option value='Comores' id='KM'>
			Comores
		</Option>
		<Option value='Congo' id='CG'>
			Congo
		</Option>
		<Option value='Corea' id='KR'>
			Corea
		</Option>
		<Option value='Corea del Norte' id='KP'>
			Corea del Norte
		</Option>
		<Option value='Costa del Marfíl' id='CI'>
			Costa del Marfíl
		</Option>
		<Option value='Costa Rica' id='CR'>
			Costa Rica
		</Option>
		<Option value='Croacia' id='HR'>
			Croacia
		</Option>
		<Option value='Cuba' id='CU'>
			Cuba
		</Option>
		<Option value='Dinamarca' id='DK'>
			Dinamarca
		</Option>
		<Option value='Djibouri' id='DJ'>
			Djibouri
		</Option>
		<Option value='Dominica' id='DM'>
			Dominica
		</Option>
		<Option value='Ecuador' id='EC'>
			Ecuador
		</Option>
		<Option value='Egipto' id='EG'>
			Egipto
		</Option>
		<Option value='El Salvador' id='SV'>
			El Salvador
		</Option>
		<Option value='Emiratos Arabes Unidos' id='AE'>
			Emiratos Arabes Unidos
		</Option>
		<Option value='Eritrea' id='ER'>
			Eritrea
		</Option>
		<Option value='Eslovaquia' id='SK'>
			Eslovaquia
		</Option>
		<Option value='Eslovenia' id='SI'>
			Eslovenia
		</Option>
		<Option value='España' id='ES'>
			España
		</Option>
		<Option value='Estados Unidos' id='US'>
			Estados Unidos
		</Option>
		<Option value='Estonia' id='EE'>
			Estonia
		</Option>
		<Option value='c' id='ET'>
			Etiopía
		</Option>
		<Option value='Ex-República Yugoslava de Macedonia' id='MK'>
			Ex-República Yugoslava de Macedonia
		</Option>
		<Option value='Filipinas' id='PH'>
			Filipinas
		</Option>
		<Option value='Finlandia' id='FI'>
			Finlandia
		</Option>
		<Option value='Francia' id='FR'>
			Francia
		</Option>
		<Option value='Gabón' id='GA'>
			Gabón
		</Option>
		<Option value='Gambia' id='GM'>
			Gambia
		</Option>
		<Option value='Georgia' id='GE'>
			Georgia
		</Option>
		<Option value='Georgia del Sur y las islas Sandwich del Sur' id='GS'>
			Georgia del Sur y las islas Sandwich del Sur
		</Option>
		<Option value='Ghana' id='GH'>
			Ghana
		</Option>
		<Option value='Gibraltar' id='GI'>
			Gibraltar
		</Option>
		<Option value='Granada' id='GD'>
			Granada
		</Option>
		<Option value='Grecia' id='GR'>
			Grecia
		</Option>
		<Option value='Groenlandia' id='GL'>
			Groenlandia
		</Option>
		<Option value='Guadalupe' id='GP'>
			Guadalupe
		</Option>
		<Option value='Guam' id='GU'>
			Guam
		</Option>
		<Option value='Guatemala' id='GT'>
			Guatemala
		</Option>
		<Option value='Guayana' id='GY'>
			Guayana
		</Option>
		<Option value='Guayana francesa' id='GF'>
			Guayana francesa
		</Option>
		<Option value='Guinea' id='GN'>
			Guinea
		</Option>
		<Option value='Guinea Ecuatorial' id='GQ'>
			Guinea Ecuatorial
		</Option>
		<Option value='Guinea-Bissau' id='GW'>
			Guinea-Bissau
		</Option>
		<Option value='Haití' id='HT'>
			Haití
		</Option>
		<Option value='Holanda' id='NL'>
			Holanda
		</Option>
		<Option value='Honduras' id='HN'>
			Honduras
		</Option>
		<Option value='Hong Kong R. A. E' id='HK'>
			Hong Kong R. A. E
		</Option>
		<Option value='Hungría' id='HU'>
			Hungría
		</Option>
		<Option value='India' id='IN'>
			India
		</Option>
		<Option value='Indonesia' id='ID'>
			Indonesia
		</Option>
		<Option value='Irak' id='IQ'>
			Irak
		</Option>
		<Option value='Irán' id='IR'>
			Irán
		</Option>
		<Option value='Irlanda' id='IE'>
			Irlanda
		</Option>
		<Option value='Isla Bouvet' id='BV'>
			Isla Bouvet
		</Option>
		<Option value='Isla Christmas' id='CX'>
			Isla Christmas
		</Option>
		<Option value='Isla Heard e Islas McDonald' id='HM'>
			Isla Heard e Islas McDonald
		</Option>
		<Option value='Islandia' id='IS'>
			Islandia
		</Option>
		<Option value='Islas Caimán' id='KY'>
			Islas Caimán
		</Option>
		<Option value='Islas Cook' id='CK'>
			Islas Cook
		</Option>
		<Option value='Islas de Cocos o Keeling' id='CC'>
			Islas de Cocos o Keeling
		</Option>
		<Option value='Islas Faroe' id='FO'>
			Islas Faroe
		</Option>
		<Option value='Islas Fiyi' id='FJ'>
			Islas Fiyi
		</Option>
		<Option value='Islas Malvinas Islas Falkland' id='FK'>
			Islas Malvinas Islas Falkland
		</Option>
		<Option value='Islas Marianas del norte' id='MP'>
			Islas Marianas del norte
		</Option>
		<Option value='Islas Marshall' id='MH'>
			Islas Marshall
		</Option>
		<Option value='Islas menores de Estados Unidos' id='UM'>
			Islas menores de Estados Unidos
		</Option>
		<Option value='Islas Palau' id='PW'>
			Islas Palau
		</Option>
		<Option value='Islas Salomón' d='SB'>
			Islas Salomón
		</Option>
		<Option value='Islas Tokelau' id='TK'>
			Islas Tokelau
		</Option>
		<Option value='Islas Turks y Caicos' id='TC'>
			Islas Turks y Caicos
		</Option>
		<Option value='Islas Vírgenes EE.UU.' id='VI'>
			Islas Vírgenes EE.UU.
		</Option>
		<Option value='Islas Vírgenes Reino Unido' id='VG'>
			Islas Vírgenes Reino Unido
		</Option>
		<Option value='Israel' id='IL'>
			Israel
		</Option>
		<Option value='Italia' id='IT'>
			Italia
		</Option>
		<Option value='Jamaica' id='JM'>
			Jamaica
		</Option>
		<Option value='Japón' id='JP'>
			Japón
		</Option>
		<Option value='Jordania' id='JO'>
			Jordania
		</Option>
		<Option value='Kazajistán' id='KZ'>
			Kazajistán
		</Option>
		<Option value='Kenia' id='KE'>
			Kenia
		</Option>
		<Option value='Kirguizistán' id='KG'>
			Kirguizistán
		</Option>
		<Option value='Kiribati' id='KI'>
			Kiribati
		</Option>
		<Option value='Kuwait' id='KW'>
			Kuwait
		</Option>
		<Option value='Laos' id='LA'>
			Laos
		</Option>
		<Option value='Lesoto' id='LS'>
			Lesoto
		</Option>
		<Option value='Letonia' id='LV'>
			Letonia
		</Option>
		<Option value='Líbano' id='LB'>
			Líbano
		</Option>
		<Option value='Liberia' id='LR'>
			Liberia
		</Option>
		<Option value='Libia' id='LY'>
			Libia
		</Option>
		<Option value='Liechtenstein' id='LI'>
			Liechtenstein
		</Option>
		<Option value='Lituania' id='LT'>
			Lituania
		</Option>
		<Option value='Luxemburgo' id='LU'>
			Luxemburgo
		</Option>
		<Option value='Macao R. A. E' id='MO'>
			Macao R. A. E
		</Option>
		<Option value='Madagascar' id='MG'>
			Madagascar
		</Option>
		<Option value='Malasia' id='MY'>
			Malasia
		</Option>
		<Option value='Malawi' id='MW'>
			Malawi
		</Option>
		<Option value='Maldivas' id='MV'>
			Maldivas
		</Option>
		<Option value='Malí' id='ML'>
			Malí
		</Option>
		<Option value='Malta' id='MT'>
			Malta
		</Option>
		<Option value='Marruecos' id='MA'>
			Marruecos
		</Option>
		<Option value='Martinica' id='MQ'>
			Martinica
		</Option>
		<Option value='Mauricio' id='MU'>
			Mauricio
		</Option>
		<Option value='Mauritania' id='MR'>
			Mauritania
		</Option>
		<Option value='Mayotte' id='YT'>
			Mayotte
		</Option>
		<Option value='México' id='MX'>
			México
		</Option>
		<Option value='Micronesia' id='FM'>
			Micronesia
		</Option>
		<Option value='Moldavia' id='MD'>
			Moldavia
		</Option>
		<Option value='Mónaco' id='MC'>
			Mónaco
		</Option>
		<Option value='Mongolia' id='MN'>
			Mongolia
		</Option>
		<Option value='Montserrat' id='MS'>
			Montserrat
		</Option>
		<Option value='Mozambique' id='MZ'>
			Mozambique
		</Option>
		<Option value='Namibia' id='NA'>
			Namibia
		</Option>
		<Option value='Nauru' id='NR'>
			Nauru
		</Option>
		<Option value='Nepal' id='NP'>
			Nepal
		</Option>
		<Option value='Nicaragua' id='NI'>
			Nicaragua
		</Option>
		<Option value='Níger' id='NE'>
			Níger
		</Option>
		<Option value='Nigeria' id='NG'>
			Nigeria
		</Option>
		<Option value='Niue' id='NU'>
			Niue
		</Option>
		<Option value='Norfolk' id='NF'>
			Norfolk
		</Option>
		<Option value='Noruega' id='NO'>
			Noruega
		</Option>
		<Option value='Nueva Caledonia' id='NC'>
			Nueva Caledonia
		</Option>
		<Option value='Nueva Zelanda' id='NZ'>
			Nueva Zelanda
		</Option>
		<Option value='Omán' id='OM'>
			Omán
		</Option>
		<Option value='Panamá' id='PA'>
			Panamá
		</Option>
		<Option value='Papua Nueva Guinea' id='PG'>
			Papua Nueva Guinea
		</Option>
		<Option value='Paquistán' id='PK'>
			Paquistán
		</Option>
		<Option value='Paraguay' id='PY'>
			Paraguay
		</Option>
		<Option value='Perú' id='PE'>
			Perú
		</Option>
		<Option value='Pitcairn' id='PN'>
			Pitcairn
		</Option>
		<Option value='Polinesia francesa' id='PF'>
			Polinesia francesa
		</Option>
		<Option value='Polonia' id='PL'>
			Polonia
		</Option>
		<Option value='Portugal' id='PT'>
			Portugal
		</Option>
		<Option value='Puerto Rico' id='PR'>
			Puerto Rico
		</Option>
		<Option value='Qatar' id='QA'>
			Qatar
		</Option>
		<Option value='Reino Unido' id='UK'>
			Reino Unido
		</Option>
		<Option value='República Centroafricana' id='CF'>
			República Centroafricana
		</Option>
		<Option value='República Checa' id='CZ'>
			República Checa
		</Option>
		<Option value='República de Sudáfrica' id='ZA'>
			República de Sudáfrica
		</Option>
		<Option value='República Democrática del Congo Zaire' id='CD'>
			República Democrática del Congo Zaire
		</Option>
		<Option value='República Dominicana' id='DO'>
			República Dominicana
		</Option>
		<Option value='Reunión' id='RE'>
			Reunión
		</Option>
		<Option value='Ruanda' id='RW'>
			Ruanda
		</Option>
		<Option value='Rumania' id='RO'>
			Rumania
		</Option>
		<Option value='Rusia' id='RU'>
			Rusia
		</Option>
		<Option value='Samoa' id='WS'>
			Samoa
		</Option>
		<Option value='Samoa occidental' id='AS'>
			Samoa occidental
		</Option>
		<Option value='San Kitts y Nevis' id='KN'>
			San Kitts y Nevis
		</Option>
		<Option value='San Marino' id='SM'>
			San Marino
		</Option>
		<Option value='San Pierre y Miquelon' id='PM'>
			San Pierre y Miquelon
		</Option>
		<Option value='San Vicente e Islas Granadinas' id='VC'>
			San Vicente e Islas Granadinas
		</Option>
		<Option value='Santa Helena' id='SH'>
			Santa Helena
		</Option>
		<Option value='Santa Lucía' id='LC'>
			Santa Lucía
		</Option>
		<Option value='Santo Tomé y Príncipe' id='ST'>
			Santo Tomé y Príncipe
		</Option>
		<Option value='Senegal' id='SN'>
			Senegal
		</Option>
		<Option value='Serbia y Montenegro' id='YU'>
			Serbia y Montenegro
		</Option>
		<Option value='Sychelles' id='SC'>
			Seychelles
		</Option>
		<Option value='Sierra Leona' id='SL'>
			Sierra Leona
		</Option>
		<Option value='Singapur' id='SG'>
			Singapur
		</Option>
		<Option value='Siria' id='SY'>
			Siria
		</Option>
		<Option value='Somalia' id='SO'>
			Somalia
		</Option>
		<Option value='Sri Lanka' id='LK'>
			Sri Lanka
		</Option>
		<Option value='Suazilandia' id='SZ'>
			Suazilandia
		</Option>
		<Option value='Sudán' id='SD'>
			Sudán
		</Option>
		<Option value='Suecia' id='SE'>
			Suecia
		</Option>
		<Option value='Suiza' id='CH'>
			Suiza
		</Option>
		<Option value='Surinam' id='SR'>
			Surinam
		</Option>
		<Option value='Svalbard' id='SJ'>
			Svalbard
		</Option>
		<Option value='Tailandia' id='TH'>
			Tailandia
		</Option>
		<Option value='Taiwán' id='TW'>
			Taiwán
		</Option>
		<Option value='Tanzania' id='TZ'>
			Tanzania
		</Option>
		<Option value='Tayikistán' id='TJ'>
			Tayikistán
		</Option>
		<Option value='Territorios británicos del océano Indico' id='IO'>
			Territorios británicos del océano Indico
		</Option>
		<Option value='Territorios franceses del sur' id='TF'>
			Territorios franceses del sur
		</Option>
		<Option value='Timor Oriental' id='TP'>
			Timor Oriental
		</Option>
		<Option value='Togo' id='TG'>
			Togo
		</Option>
		<Option value='Tonga' id='TO'>
			Tonga
		</Option>
		<Option value='Trinidad y Tobago' id='TT'>
			Trinidad y Tobago
		</Option>
		<Option value='Túnez' id='TN'>
			Túnez
		</Option>
		<Option value='Turkmenistán' id='TM'>
			Turkmenistán
		</Option>
		<Option value='Turquía' id='TR'>
			Turquía
		</Option>
		<Option value='Tuvalu' id='TV'>
			Tuvalu
		</Option>
		<Option value='Ucrania' id='UA'>
			Ucrania
		</Option>
		<Option value='Uganda' id='UG'>
			Uganda
		</Option>
		<Option value='Uruguay' id='UY'>
			Uruguay
		</Option>
		<Option value='Uzbekistán' id='UZ'>
			Uzbekistán
		</Option>
		<Option value='Vanuatu' id='VU'>
			Vanuatu
		</Option>
		<Option value='Venezuela' id='VE'>
			Venezuela
		</Option>
		<Option value='Vietnam' id='VN'>
			Vietnam
		</Option>
		<Option value='Wallis y Futuna' id='WF'>
			Wallis y Futuna
		</Option>
		<Option value='Yemen' id='YE'>
			Yemen
		</Option>
		<Option value='Zambia' id='ZM'>
			Zambia
		</Option>
		<Option value='Zimbabue' id='ZW'>
			Zimbabue
		</Option>
	</>
)

const data = [ 
	{
		title: 'José Perez',
		content: 'Presidente'
	},
	{
		title: 'José Perez',
		content: 'Customer Service Senior Manager'
	},
	{
		title: 'José Perez',
		content: 'Senior Customer Success Consultant'
	},
	{
		title: 'José Perez',
		content: 'Gerente de Consultoría de Soluciones'
	},
  ];
  
export default () => {

  const [attendeeData, setAttendeeData] = useState({ name: '', lastName: '', email: '', country: '', phone: '', jobTitle: ''})

  const [form] = Form.useForm();
  
  const handleChange = (event) => {
    let obj = {}
    obj[event.target.id] = event.target.value
    setAttendeeData({...attendeeData, ...obj})
  }

  const handleSubmit = () => {

	// FETCHING DATA FROM LOCALSTORAGE ↓
	let attendees = JSON.parse(localStorage.getItem('attendees'))
	attendees ? attendees = [...attendees, attendeeData] : attendees = [attendeeData]

    // SAVING THE DATA IN LOCALSTORAGE ↓
    localStorage.setItem('attendees' , JSON.stringify(attendees))

	// CLEARING THE FORM ↓
	form.resetFields()
    setAttendeeData({ name: '', lastName: '', email: '', country: '', phone: '', jobTitle: ''})
  }

	return (

	<Layout>
      <Header className='header-container'>
		  <Row>
		  	<Col className='header-col' span={24}>
				<Text className='header-webinar-button'>WEBINAR</Text>
				<Title level={2} className='header-titles'>El reto de humanizar el CX financiero en 2021.</Title>
				<Title level={2} className='header-titles header-title-italic'>La experiencia de un Unicornio de Latam</Title>
				<Title level={5} className='header-titles header-title-semiBold'>MIÉRCOLES 16 DE DICIEMBRE | 17 HS (HORARIO DE QUITO)</Title>
			</Col>
		  </Row>
	  </Header>
      <Content className='content-container'>
	  	<Row>
		  	<Col xs={0} sm={0} md={2} lg={2} xl={3}></Col>
			<Col xs={24} sm={24} md={9} lg={9} xl={8}>
				<img src={Group5} alt='sponsors' id='sponsors-image'/>
				<Row>
					<Text className='text-content'>
					Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
					</Text>
					<Text className='text-content'>
					Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.
					</Text>
					<Text className='text-content'>
					Escucha de primera mano la voz de nuestros especialistas:
					</Text>
				</Row>
				<Row>
				<List
					itemLayout="horizontal"
					dataSource={data}
					className='content-list-speakers'
					size='large'
					split={false}
					renderItem={item => (
					<List.Item className='list-item'>
						<List.Item.Meta
						className='list-item-data'
						avatar={<Avatar size={55} />}
						title={item.title}
						description={item.content}
						/>
					</List.Item>
				)}
				/>
				</Row>
				<Row>
				<Text className='text-content'>
				Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
				</Text>		
				<Text className='text-content'>
				¡Te esperamos!
				</Text>	
				<img src={Group5} alt='sponsors' id='sponsors-image'/>
				</Row>
			</Col>
			<Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
			<Col xs={24} sm={24} md={9} lg={9} xl={8}>
			<Form
				form={form}
				onFinish={handleSubmit}
				requiredMark={false}
				layout='vertical'
				className='form-container'
				scrollToFirstError
				>
				<Form.Item className='form-title'>
					<Text> ¡Inscríbete y reserva tu lugar ahora!</Text>
				</Form.Item>
				<Form.Item
				name="name"
				label="Nombre:"
				rules={[ 
					{ 
					required: true, 
					message: 'Por favor, ingrese su nombre',
					} 
				]}
				>
					<Input onChange={handleChange} value={attendeeData.name}/>
				</Form.Item>
				<Form.Item
				
				name="lastName"
				label="Apellido:"
				rules={[
					{ 
					required: true, 
					message: 'Por favor, ingrese su apellido',
					} 
				]}
				>
					<Input onChange={handleChange} value={attendeeData.lastName} />
				</Form.Item>
				<Form.Item
					name="email"
					label="Correo electrónico del trabajo:"
					rules={[
					{
						type: 'email',
						message: 'El email ingresado no es válido',
					},
					{
						required: true,
						message: 'Por favor, ingrese un email',
					},
					]}
				>
					<Input onChange={handleChange} value={attendeeData.email}/>
				</Form.Item>
				<Form.Item
					name="country"
					label="País:"
					rules={[
					{ 
						required: true, 
						message: 'Por favor, seleccione un país' 
					}
					]}
				>
					<Select 
					onChange={(value) => setAttendeeData({...attendeeData, country: value})} 
					value={attendeeData.country}>
						{countries()}
					</Select>
				</Form.Item>
				<Form.Item
					name="phone"
					label="Número de teléfono:"
					rules={[{ required: true, message: 'Por favor, ingrese un número de teléfono' }]}
				>
					<Input onChange={handleChange} value={attendeeData.phone}/>
				</Form.Item>
				<Form.Item
				name="jobTitle"
				label="Puesto de trabajo:"
				rules={[
					{ 
					required: true, 
					message: 'Por favor, ingrese su apellido',
					} 
				]}
				>
					<Input onChange={handleChange} value={attendeeData.jobTitle}/>
				</Form.Item>
				<Form.Item>
					<Button type="default" htmlType="submit" id='form-button-submit'>
					Inscríbete
					</Button>
				</Form.Item>
			</Form>
			</Col>
			<Col xs={0} sm={0} md={2} lg={2} xl={3}></Col>
		</Row>
	  </Content>
      <Footer id='footer-container'>
		  <Row id='footer-row'>
			  <Col xs={24} sm={4} md={4} lg={4} xl={4} id='copyright'>
			  	<Text>© 2020</Text>
			  </Col>
			  <Col xs={24} sm={20} md={20} lg={20} xl={20} id='social-column'>
				  <div id='social-container'>
					<img className='footer-images' src={twitter}/>
					<img className='footer-images' src={facebook}/>
					<img className='footer-images' src={youtube}/>
					<img className='footer-images' src={instagram}/>
					<img className='footer-images' src={linkedin}/>
				  </div>
			  </Col>
		  </Row>
	  </Footer>
    </Layout>

	)
}
