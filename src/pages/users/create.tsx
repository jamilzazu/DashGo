import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Heading,
  HStack,
  Table,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Divider,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderradius={8}
          bg="gray.800"
          p="8"
        >
          <Heading
            size="lg"
            font_weight="normal"
          >
            Criar usuário
          </Heading>

          <Divider
            my="6"
            bordercolor="gray.700"
          />

          <VStack
            spacing="8"
          >
            <SimpleGrid
              minChildWidth="240px"
              spacing="8"
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing="8"
              w="100%"
            >
              <Input
                name="password"
                label="Senha"
                type="password"
              />
              <Input
                name="password_confirmation"
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt="8"
            justify="flex-end"
          >
            <HStack
              spacing="4"
            >
              <Button
                colorScheme="whiteAlpha"
              >
                Cancelar
              </Button>

              <Button
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}