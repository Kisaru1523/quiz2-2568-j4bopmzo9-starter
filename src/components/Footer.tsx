import { Text, Group } from "@mantine/core";
export default function Footer(props : {courseName: string, year: string, fullName: string, studentId: string | number}) {
  return (
    
    <Group p="md" justify="center">
      <Text>
        © {props.fullName} ({props.studentId}) {props.courseName}-{props.year} . All rights reserved.
      </Text>
    </Group>
    
  );
}
