import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    function goLogout(){
        setToken('')
        alert("Usuario deslogado com sucesso!")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor">
                            <Link to='/home' className="cursor text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Link to='/postagens' className="cursor text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Link to='/temas' className="cursor text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Link to='/formularioTema' className="cursor text-decorator-none">
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;