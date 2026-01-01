import React, { useState } from 'react';
import { Button, message, Steps, theme, ConfigProvider } from 'antd';
const steps = [
    {
        title: 'Consulta inicial',
        content: 'Evaluación de necesidades y visita técnica gratuita',
    },
    {
        title: 'Diseño y Presupuesto',
        content: 'Propuesta detallada con planos y cronograma',
    },
    {
        title: 'Ejecución',
        content: 'Desarrollo del proyecto con seguimiento constante',
    },
    {
        title: 'Entrega y Seguimiento',
        content: 'Finalización y servicio post-venta garantizado'
    }
];

export default function StepsWork() {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map(item => ({ key: item.title, title: item.title }));
    const contentStyle = {
        lineHeight: '100px',
        textAlign: 'center',
        color: '#ffffffff',
        backgroundColor: '#0f2a44',
        borderRadius: token.borderRadiusLG,
        border: `1px solid ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Steps: {
                        colorPrimary: '#0f2a44', // activo
                        colorText: '#0f2a44', // texto normal
                        colorTextLightSolid: '#ffffff', // número activo
                        colorFillContent: '#dbd6d6ff', // fondo contenido
                        colorBorder: '#0f2a44', // borde contenido
                        colorTextSecondary: '#215766ff', // texto secundario
                        
                    },
                    Button: {
                        colorPrimary: '#486871',
                        colorPrimaryHover: '#486871',
                        colorPrimaryActive: '#486871',
                        borderRadius: 6,
                    },
                },
            }}
        >
            <div>
                <Steps current={current} items={items} />
                <div className='bg-white' style={contentStyle}>{steps[current].content}</div>
                <div className='mt-10'>
                    {current < steps.length - 1 && (
                        <Button className='btn-next' 
                            onClick={() => next()}>
                            Siguiente
                        </Button>
                    )}
                    {current > 0 && (
                        <Button className='m-5 ' onClick={() => prev()}>
                            Anterior
                        </Button>
                    )}
                </div>
            </div>
        </ConfigProvider>
    );
}