import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
    isAdmin: user?.id === "e2741bc6-453b-4627-82a1-4b2b706b4fa3",
  };
}
