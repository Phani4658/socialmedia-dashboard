"use client";

import React, { useState } from "react";
import { DataTable } from "../../../components/ui/data-table";
import { postColumns } from "../../../components/ui/columns";
import { postKPICards, postList, userKPICards, usersList } from "@/constants";
import KPICard from "@/components/shared/KPICard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types";
import { Button } from "@/components/ui/button";

enum status {
  PUBLISHED = "published",
  HIDDEN = "hidden",
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(postList);

  const columns = [
    ...postColumns,
    {
      acessorKey: "actions",
      id: "actions",
      header: "Actions",
      cell: ({ row }: { row: any }) => {
        const post = row.original;
        return (
          <div className="flex gap-3 justify-center">
            <Button onClick={() => handleHiddenPost(post.id)}>Hide</Button>
            <Button onClick={() => handleDeletePost(post.id)}>Delete</Button>
          </div>
        );
      },
    },
  ];

  const handleHiddenPost = (postId: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            status:
              post.status === status.HIDDEN ? status.PUBLISHED : status.HIDDEN,
          }
        : post
    );
    setPosts(updatedPosts);
  };

  const handleDeletePost = (postId: number) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="py-10 mb-3 flex-1 px-5 lg:px-10">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:mb-8 mb-3">
        {postKPICards.map((cardDetails) => (
          <KPICard key={cardDetails.title} cardDetails={cardDetails} />
        ))}
      </div>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Recently Published Posts</CardTitle>
            <CardDescription>View of recently published Posts.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={posts} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Posts;
