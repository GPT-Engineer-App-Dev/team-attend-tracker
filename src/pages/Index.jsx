import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, IconButton, Checkbox, Box } from "@chakra-ui/react";
import { FaUserPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");

  const addMember = () => {
    if (newMemberName.trim() !== "") {
      setTeamMembers([...teamMembers, { name: newMemberName, present: false }]);
      setNewMemberName("");
    }
  };

  const toggleAttendance = (index) => {
    const updatedMembers = teamMembers.map((member, i) => (i === index ? { ...member, present: !member.present } : member));
    setTeamMembers(updatedMembers);
  };

  const removeMember = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Team Attendance Tracker</Text>
        <HStack width="100%">
          <Input placeholder="Enter team member name" value={newMemberName} onChange={(e) => setNewMemberName(e.target.value)} />
          <IconButton aria-label="Add Member" icon={<FaUserPlus />} onClick={addMember} />
        </HStack>
        <VStack spacing={2} width="100%">
          {teamMembers.map((member, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" padding={2} borderWidth={1} borderRadius="md">
              <Checkbox isChecked={member.present} onChange={() => toggleAttendance(index)}>
                <Text as={member.present ? "s" : "span"}>{member.name}</Text>
              </Checkbox>
              <IconButton aria-label="Remove Member" icon={<FaTrash />} onClick={() => removeMember(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
