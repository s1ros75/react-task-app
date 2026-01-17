import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";
import { Link } from "react-router-dom";
