import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Services';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>()
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })


    useEffect(() => {
        if(token == ''){
           alert('Você precisa está logado')
           navigate('/login')
        }
    }, [token])


    useEffect(() => {

        if(id !== undefined){
            findById(id)
        }

    },[id])


    async function findById(id: string){
        buscaId(`/tema/${id}`, setTema, {
            Headers:{
                'Authorization': token
            }
        })
    }


    async function onSubmit (e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("Tema" + JSON.stringify(tema))

        if(id!== undefined){
        console.log(tema)
        put(`/tema`, tema, setTema,{
            Headers:{
                'Authorization':token
            }
        })
        alert('tema atualizado com sucesso')

    }else {
        post(`/tema`, tema, setTema, {
             Headers: {
                'Authorization': token
            }
        })
        alert('tema cadastrado com sucesso')
    }
    back()
    }

    function back (){
        navigate('/temas')
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;