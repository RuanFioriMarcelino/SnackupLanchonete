import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-orange items-center justify-center" />
  );
}
