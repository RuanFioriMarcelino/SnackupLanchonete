import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, View, TextInputProps } from "react-native";

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-72 h-14 flex-row items-center p-3 border border-gray/5 bg-slate-50 rounded-lg ">
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-gray font-regular text-base"
      placeholderTextColor={colors.gray}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
