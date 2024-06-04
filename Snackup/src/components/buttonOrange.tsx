import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function ButtonOrange({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} disabled={isLoading} {...rest}>
      <View className="w-full h-full  bg-orange items-center justify-center rounded-medium">
        {isLoading ? (
          <ActivityIndicator className="text-orange" />
        ) : (
          <Text className="text-white text-2xl font-bold uppercase">
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
